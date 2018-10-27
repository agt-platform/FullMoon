import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-for-rent',
  templateUrl: './equipment-for-rent.component.html',
  styleUrls: ['./equipment-for-rent.component.css']
})
export class EquipmentForRentComponent implements OnInit {
  equiqments=[
    {
      nameOfEquiqment:'תותח שלג',
      descOfEquiqment:'תיאור',
      picSrc:'../assets/img/g1.jpg',
      status:'fade-down'
   },
   {
    nameOfEquiqment:'מכונת עשן',
    descOfEquiqment:'תיאור',
    picSrc:'../assets/img/g2.jpg',
    status:'fade-down'
  },
  {
    nameOfEquiqment:'D.J',
    descOfEquiqment:'תיאור',
    picSrc:'../assets/img/g2.jpg',
    status:'fade-down'
  },
  {
    nameOfEquiqment:'צלם מגנטים',
    descOfEquiqment:'תיאור',
    picSrc:'../assets/img/g2.jpg',
    status:'fade-down'
  },
  {
    nameOfEquiqment:'רובוט לייזר',
    descOfEquiqment:'תיאור',
    picSrc:'../assets/img/g2.jpg',
    status:'fade-down'
  },
  {
    nameOfEquiqment:'דוכני אוכל',
    descOfEquiqment:'תיאור',
    picSrc:'../assets/img/g3.jpg',
    status:'fade-down'
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
