import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  gallery=[
    {
      picSrc:'../../assets/images/g1.jpg'
   },

   {
    picSrc:'../../assets/images/g2.jpg'
   },

  {
  picSrc:'../../assets/images/g3.jpg'
  },

  {
    picSrc:'../../assets/images/g4.jpg'
  },

  {
    picSrc:'../../assets/images/g5.jpg'
  }


   
  ];
  left(){
       
  } 
  constructor() { 

  }
  ngOnInit(){
    document.addEventListener("DOMContentLoaded", function(e) {
    var myIndex = 1;
    var left = 0;
    slider();

    function slider() {
        var i;
        var x = document.getElementsByClassName("img-responsive") as HTMLCollectionOf<HTMLElement>;
        var button = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>;
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none"; 
          button[i].style.display = "none"; 
        }
        x[myIndex - 1].style.display = "block";  
        button[myIndex - 1].style.display = "block";  
    }
  
    
  });

  
  
  }

  

}
