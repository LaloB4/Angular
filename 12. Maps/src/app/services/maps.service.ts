import { Injectable } from '@angular/core';
import {Marker} from '../interfaces/marker.interface';

@Injectable()
export class MapsService {

  markers:Marker[]=[];

  constructor() {

    let defaultMarker:Marker = {
      lat:21.881186,
      lng:-102.256418,
      title:"This is my home! :D",
      draggable:true
    }

    this.markers.push(defaultMarker);

  }

  setMarkers(marker:Marker){
    this.markers.push(marker);
    this.saveMarkers();
  }

  saveMarkers(){
    localStorage.setItem('markers',JSON.stringify(this.markers));
  }

  deleteMarker(idx:number){

    this.markers.splice(idx,1);
    this.saveMarkers();
  }

  loadMarkers(){
    if(localStorage.getItem('markers')){
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }else{
      this.markers = [];
    }
  }

}
