import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos=[
    {
      photoname:'חתונה של משה',
      id:'1',
      picSrc:'../assets/img/g1.jpg'
      
   },
   {
    photoname:'חתונה של משה',
    id:'2',
    picSrc:'../assets/img/g1.jpg'
    
 },
   {
    photoname:'בר מצווה של עומר',
    id:'3',
    picSrc:'../assets/img/g2.jpg'
   
  }
]
  constructor() { }

  ngOnInit() {
  }

}
