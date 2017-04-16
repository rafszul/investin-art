import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { IMAGES } from './mock-images';

@Injectable()
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return IMAGES;
  }

}
