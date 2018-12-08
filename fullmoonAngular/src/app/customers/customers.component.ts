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

  ngOnInit(){
    document.addEventListener("DOMContentLoaded", function(e) {
    var myIndex = 1;
    
    slider();

    function slider() {
        var i;
        var x = document.getElementsByClassName("slider-customers") as HTMLCollectionOf<HTMLElement>;
        var smallSquere = document.getElementsByClassName("smallSqure2") as HTMLCollectionOf<HTMLElement>;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
          smallSquere[i].classList.remove("activesmallSqure2");   
        }
        myIndex++;
        if (myIndex > x.length) 
        {
          myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        smallSquere[myIndex - 1].classList.add("activesmallSqure2");   
      
        setTimeout(slider, 5000); 
    }
  });
  }

}


