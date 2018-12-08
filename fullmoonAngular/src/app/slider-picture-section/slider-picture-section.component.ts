import { Component, OnInit } from '@angular/core';
import { DataService } from '../http-client.service';



@Component({
  selector: 'app-slider-picture-section',
  templateUrl: './slider-picture-section.component.html',
  styleUrls: ['./slider-picture-section.component.css']
})
export class SliderPictureSectionComponent  implements OnInit {
  sliderArray: string[];
  listOfImages = 
                  [
                    {
                      bgImage : '../../assets/images/banner.jpg'
                    },
                    {
                      bgImage : '../../assets/images/g1.jpg'
                    }
                     
                  ];
  constructor(private data: DataService) {
   }

   
   
   

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", function(e) {
      var myIndex = 1;
      
      carousel1();
  
      function carousel1() {
          var i;
          var bg = document.getElementsByClassName("bg") as HTMLCollectionOf<HTMLElement>;
          var smallSquere = document.getElementsByClassName("smallSqure") as HTMLCollectionOf<HTMLElement>;
          
          for (i = 0; i < bg.length; i++) {
            bg[i].style.display = "none";
            smallSquere[i].classList.remove("activesmallSqure");  
          }
          myIndex++;
          if (myIndex > bg.length) 
          {
            myIndex = 1;
          }
          bg[myIndex - 1].style.display = "block";
          smallSquere[myIndex - 1].classList.add("activesmallSqure"); 
        
          setTimeout(carousel1, 5000); 
      }
    });
      
      

  }
}
