import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './shared';

@Component({
  selector: 'investinart-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '- invest in ART - works!';

  constructor() {}
  ngOnInit(): void {
  }
}
