import { Component } from '@angular/core';
import {MapsService} from './services/maps.service';
import {Marker} from './interfaces/marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedMarker:Marker = null;
  isDraggable:string="1";

  lat: number = 21.881186;
  lng: number = -102.256418;
  zoom: number = 18;

  constructor(public mapService:MapsService){
    this.mapService.loadMarkers();
  }

  clickInMap(event){

    console.log(event.coords.lat);

    let newMarker:Marker = {
      lat:event.coords.lat,
      lng:event.coords.lng,
      title:"No title available",
      draggable:true
    }

    this.mapService.setMarkers(newMarker);
    console.log(this.mapService.markers);

    //console.log(event);
  }

  clickInMarker(marker:Marker, idx){
    console.log(marker, idx);
    this.selectedMarker = marker;

    if(this.selectedMarker.draggable){
      this.isDraggable = "1";
    }else{
      this.isDraggable = "0";
    }

  }

  dragEndMarker(marker:Marker, event){

    console.log(marker, event);

    let lat = event.coords.lat;
    let lng = event.coords.lng;

    marker.lat = lat;
    marker.lng = lng;

    this.mapService.saveMarkers();
  }

  changeDraggable(){

    if(this.isDraggable === "1"){
      this.selectedMarker.draggable = true;
    }else{
      this.selectedMarker.draggable = false;
    }
  }

}
