import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';

@Component({
  selector: 'investinart-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  images: Image[];
  randomImage: Image;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {

    this.randomImage = this.imageService.getRandomImage();
  }
}
