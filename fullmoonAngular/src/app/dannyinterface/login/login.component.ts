import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
    userName : "",
    password :""
    
  }

  constructor(public httpClient:HttpClient) { }

  async login(){
    await this.httpClient.post('http://localhost:3000/login' ,this.user)
    .subscribe(user => {
      console.log(user)
   })
  }

  ngOnInit() {
  }

}
