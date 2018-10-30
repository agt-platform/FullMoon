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


doSome(x){
     // Get the modal
 var modal = document.getElementById('myModal');
 var div = document.getElementById(x) ;
 // Get the image and insert it inside the modal - use its "alt" text as a caption
 var img = div.getElementsByTagName('img')[0];
  var modalImg = document.getElementById("img01") as HTMLImageElement;
  var captionText = document.getElementById("caption");
 div.onclick = function(){
    modal.style.display = "block";
     modalImg.src = img.src;
     captionText.innerHTML = img.alt;
 }
 
 // Get the <span> element that closes the modal
 var span = document.getElementById("close");
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
     modal.style.display = "none";
 }
  
 
}

  constructor() {

  }

  ngOnInit() {
 
  }

}
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img