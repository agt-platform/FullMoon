import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('#btn1').click(function(){
        alert('button is clicked');
      })
    });

     // Menu-toggle button

     $(document).ready(function() {
      $(".menu-icon").on("click", function() {
        
        $(".navi").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function() {
      if($(window).scrollTop()) {
            $('.menu-icon').addClass('black');
      }

      else {
            $('.menu-icon').removeClass('black');
      }
})


  }

}
