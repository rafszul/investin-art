import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';

@Component({
  selector: 'investinart-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  image: Image;
  images: Image[];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  onselect(image: Image): void {
    this.image = image;
  }

}
