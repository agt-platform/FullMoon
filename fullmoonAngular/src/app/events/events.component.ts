import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
events=[
  {
    nameOfEvent:'full mitzva',
    descOfEvent:'FullMoon חגיגות בר/בת מצווה באווירת',
    picSrc:'../assets/img/g1.jpg'
 },
 {
  nameOfEvent:'Full Wedding',
  descOfEvent:'FullMoon חתונה באווירת',
  picSrc:'../assets/img/g2.jpg'
},
{
  nameOfEvent:'Full Bachelorette',
  descOfEvent:'FullMoon מסיבת רווקים/רווקות באווירת',
  picSrc:'../assets/img/g3.jpg'
}
];


  constructor() { 

    
  }

  ngOnInit() {
    
  }

}
