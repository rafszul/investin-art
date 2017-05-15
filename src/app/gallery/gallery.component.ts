import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'investinart-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // result: any;
  // image: Image;
  // images: Image[];
  // selectedImage: Image;

  constructor(
    // public imageService: ImageService,
    // public dialogService: DialogService,
    // public dialog: MdDialog
    ) {}

  ngOnInit() {
    // this.images = this.imageService.getImages();
  }
  // onSelect(image: Image): void {
  //   this.image = image;
  //   this.selectedImage = this.image;
  // }

}
