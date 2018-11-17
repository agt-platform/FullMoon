import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderPictureSectionComponent } from './slider-picture-section/slider-picture-section.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { EquipmentForRentComponent } from './equipment-for-rent/equipment-for-rent.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}