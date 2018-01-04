import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighligthed]'
})
export class HighligthedDirective {

  constructor(public eR:ElementRef) {
      console.log("Custom directive ready to use!");
   }

   @Input("appHighligthed") colorToSet:string;

   @HostListener('mouseenter') mouseEnterTo(){
     this.setColor(this.colorToSet || 'gray');
   }

   @HostListener('mouseleave') mouseLeaveTo(){
     this.setColor(null);
   }

   private setColor(color:string){
     this.eR.nativeElement.style.backgroundColor = color;
   }

}
