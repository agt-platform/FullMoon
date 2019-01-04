import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album=[
    {
      albumName:'חתונה של משה',
      albumDate:'20.03.2018',
      picSrc:'../assets/img/g1.jpg',
      description:'חתונה באולמי חוות רונית'
   },
   {
    albumName:'חתונה של משה',
    albumDate:'20.03.2018',
    picSrc:'../assets/img/g1.jpg',
    description:'חתונה באולמי חוות רונית'
 },
   {
    albumName:'בר מצווה של עומר',
    albumDate:'07.05.2018',
    picSrc:'../assets/img/g2.jpg',
    description:'בר מצווה באולמי פאר'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
