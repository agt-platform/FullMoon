import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';
import { EventsComponent } from './events/events.component';
import { EquipmentForRentComponent } from './equipment-for-rent/equipment-for-rent.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderPictureSectionComponent,
    EventsComponent,
    EquipmentForRentComponent,
    CustomersComponent,
    AboutUsComponent,
    GalleryComponent,
    HomeComponent,

   
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
