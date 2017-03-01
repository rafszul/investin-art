import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'investin-art-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// this is the color palette tiles

    tiles = [
    {text: 'dark primary color', cols: 1, rows: 1, color: '#616161'},
    {text: 'primary color', cols: 1, rows: 1, color: '#9E9E9E'},
    {text: 'light primary color', cols: 1, rows: 1, color: '#F5F5F5'},
    {text: 'text/icons', cols: 1, rows: 1, color: '#212121'},
    {text: 'accent color', cols: 1, rows: 1, color: '#607D8B'},
    {text: 'primary text', cols: 1, rows: 1, color: '#212121'},
    {text: 'secondary text', cols: 1, rows: 1, color: '#757575'},
    {text: 'divider color', cols: 1, rows: 1, color: '#BDBDBD'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
