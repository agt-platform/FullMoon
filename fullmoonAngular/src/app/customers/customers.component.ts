import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers=[
    {
      picSrc:'../../assets/images/1.png',
      nameOfCustomer:'אבי כהן',
      subTitle:'Lorem Ipsum',
      descOfCustomer:'Duis nulla nulla, faucibus id diam ac, luctus sodales purus.Quisque nibh ipsum,Ut accumsan.'
   },

   {
    picSrc:'../../assets/images/3.png',
    nameOfCustomer:'אלון לוי',
    subTitle:'Lorem Ipsum',
    descOfCustomer:'Duis nulla nulla, faucibus id diam ac, luctus sodales purus.Quisque nibh ipsum,Ut accumsan.'
 }
   
  ];

  constructor() { }

  ngOnInit() {
    var myIndex = 0;
    carousel();

function carousel() {
    var i;
    var x = <HTMLElement[]><any>document.querySelectorAll(".slider-customers")
    console.log(x[0].style);
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    /*if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds*/
}
  }

}
