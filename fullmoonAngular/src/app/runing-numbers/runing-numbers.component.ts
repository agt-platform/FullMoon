import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runing-numbers',
  templateUrl: './runing-numbers.component.html',
  styleUrls: ['./runing-numbers.component.css']
})
export class RuningNumbersComponent implements OnInit {
  us=[
    {
      picSrc:'../../assets/images/g4.jpg',
      title: 'מה הופך אותנו למיוחדים',
      des:'בואו לגלות למה דווקא אנחנו'
   },

   {
    picSrc:'../../assets/images/g5.jpg',
    title: 'מסיבות נוספות',
    des:'בואו לגלות מסיבות נוספות שאנחנו מארגנים'
   },

  {
  picSrc:'../../assets/images/g6.jpg',
  title: 'בואו לשיחת היכרות',
  des: 'תגיעו לשיחה דרך האתר ותחסכו 10% מהמחיר'
  }
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
