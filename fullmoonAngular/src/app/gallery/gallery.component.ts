import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isLeft : boolean= false;
  length = 0;
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
    var i;
    var x = document.getElementsByClassName("img-responsive") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
      x[i].parentElement.classList.remove("gallery");
    }
    if(this.length == x.length - 1){
      this.length = 0;
    }
    else{
      this.length++;
    }
    x[this.length].style.display = "block";  
  } 

  right(){
    var i;
    var x = document.getElementsByClassName("img-responsive") as HTMLCollectionOf<HTMLElement>;
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
      x[i].parentElement.classList.remove("gallery");
    }
    if(this.length ==  0){
      this.length = 4;
    }
    else{
      this.length--;
    }
    x[this.length].style.display = "block";  
  } 
  constructor() { 

  }
  ngOnInit(){
    
  //   document.addEventListener("DOMContentLoaded", function(e) {
    

  //   function slider() {
  //       var i;
  //       var x = document.getElementsByClassName("img-responsive") as HTMLCollectionOf<HTMLElement>;
  //       var button = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>;
  //       for (i = 0; i < x.length; i++) {
  //         x[i].style.display = "none"; 
          
  //       }
  //       x[0].style.display = "block";  
  //   }

  //   slider();
  // });

  
  
  }

  

}
