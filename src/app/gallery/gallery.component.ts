import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'investin-art-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // tiles: any[] = [
  //   {img: 'url(https://static.pexels.com/photos/169617/pexels-photo-169617.jpeg)', text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {img: 'url(./../../../assets/invest-in-art-header-mid-cleaned.svg)', text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {img: 'url(./../../../assets/invest-in-art-header-mid-cleaned.svg)', text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {img: 'url(./../../../assets/invest-in-art-header-mid-cleaned.svg)', text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
