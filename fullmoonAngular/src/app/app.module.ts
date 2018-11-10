import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';
import { EventsComponent } from './events/events.component';
import { EquipmentForRentComponent } from './equipment-for-rent/equipment-for-rent.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { AboutUsComponent } from './about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderPictureSectionComponent,
    EventsComponent,
    EquipmentForRentComponent,
    CustomersComponent,
    AboutUsComponent,

   
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
