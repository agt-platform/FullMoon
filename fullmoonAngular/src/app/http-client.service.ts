import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


const URL = '../assets/images.json';
const test = './test'

@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) {
 }

 getData() {
   return this.http.get(URL);
 }

 getTest(){
  return this.http.get(test);
 }

}

