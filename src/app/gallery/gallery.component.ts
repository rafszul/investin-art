import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';
import { MdDialog } from '@angular/material';
import { DialogComponent } from './../shared/dialog/dialog.component';

@Component({
  selector: 'investinart-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  image: Image;
  images: Image[];
  selectedImage: Image;

  constructor(private imageService: ImageService,
              public dialog: MdDialog) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  // onselect(image: Image): void {
  //   this.image = image;
  // }

  openDialog(image: Image) {
    this.selectedImage = image;
    const dialog = this.dialog.open(DialogComponent);
    (<any>dialog.componentInstance).this.image = image;


  }

}
