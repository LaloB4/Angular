import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Routes
import {APP_ROUTING} from './app.routes';

//Services
import {MoviesService} from './services/movies.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';

//Pipes
import { ImagePipe } from './pipes/image.pipe';
import { TextPipe } from './pipes/text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    ImagePipe,
    TextPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
