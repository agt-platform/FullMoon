import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
// import {map}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  users:any = [];
  user = {
    name : "",
    email :"",
    phone : "",
    message : ""
  }
  constructor(public httpClient:HttpClient) {

   }


 async getUsers(){
     await this.httpClient.get('http://localhost:3000/users' , {responseType: 'text'})
     .subscribe(users => {
      console.log(users)
    })
  }

  async addUser(){
    await this.httpClient.post('http://localhost:3000/user' ,this.user)
    .subscribe(user => {
      console.log(user)
   })
  }

  ngOnInit() {
    this.getUsers()
  }

}


