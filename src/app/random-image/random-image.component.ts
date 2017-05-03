import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';

@Component({
  selector: 'investinart-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit {
  images: Image[];
  randomImage: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();

    // let randomKey: number = Math.floor(Math.random() * this.images.length);

    this.randomImage = this.imageService.getRandomImage();
  }
}
