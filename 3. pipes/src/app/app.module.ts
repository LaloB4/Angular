import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {CapitalizePipe} from './pipes/capitalize.pipe';


import { AppComponent } from './app.component';
import { SecureDomPipe } from './pipes/secure-dom.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecureDomPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es-ES' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
