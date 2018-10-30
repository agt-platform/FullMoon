import { Component, OnInit } from '@angular/core';
import { DataService } from '../http-client.service';



@Component({
  selector: 'app-slider-picture-section',
  templateUrl: './slider-picture-section.component.html',
  styleUrls: ['./slider-picture-section.component.css']
})
export class SliderPictureSectionComponent  implements OnInit {
  sliderArray: string[];
  constructor(private data: DataService) {
   }

   
   
   

  ngOnInit() {
    
   var listOfImages = ['../../assets/images/banner.jpg' , '../../assets/images/g1.jpg'];
   var i = 0;
			carousel();

			function carousel() {
        
        if( i == 0){
          var bg =  document.getElementsByClassName("bg") as HTMLCollectionOf<HTMLElement>;
            bg[0].style.backgroundImage = "url(" +listOfImages[0] + ")";
            i++;
        }
        else{
          var bg =  document.getElementsByClassName("bg") as HTMLCollectionOf<HTMLElement>;
          bg[0].style.left = parseInt(bg[0].style.left) + 10 + 'px';
            bg[0].style.backgroundImage = "url(" +listOfImages[1] + ")";
            i--;
        }
        
        setTimeout(carousel, 5000);
        
      }
      
      

  }
}
