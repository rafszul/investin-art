import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return IMAGES;
  }

  getRandomImage(): Image {
  let images = this.getImages();
  let randomKey: number = Math.floor(Math.random() * images.length);
  return images[randomKey];

}

}
