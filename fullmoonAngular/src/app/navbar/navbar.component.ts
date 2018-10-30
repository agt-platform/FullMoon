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

     // Menu-toggle button

     $(document).ready(function() {
      $(".menu-icon").on("click", function() {
        $("ul").toggleClass("showing");
        $("nav").toggleClass("absolute");
      });
});



  }

}
