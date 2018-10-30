import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderPictureSectionComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
