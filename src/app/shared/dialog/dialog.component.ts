import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Image, ImageService } from '../';

@Component({
  selector: 'investinart-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  images: any;
  constructor(
    private imageService: ImageService,
    public dialogRef: MdDialogRef<DialogComponent>) { }

  ngOnInit() {
    this.images = this.imageService.getImages();

    // this.imagesService.getImages().subscribe(images => {
    //   console.log(images);
    //   this.images = images;
    // });
  }

}
