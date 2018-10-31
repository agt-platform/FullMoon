import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';
import { EventsComponent } from './events/events.component';
import { EquipmentForRentComponent } from './equipment-for-rent/equipment-for-rent.component';
import { ContactUsComponent } from './contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderPictureSectionComponent,
    EventsComponent,
    EquipmentForRentComponent,
    ContactUsComponent,
   
  
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
