import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from './../shared';
import { MdDialog } from '@angular/material';
import { DialogComponent } from './../shared/dialog/dialog.component';
import { DialogService } from './../shared/dialog.service';

@Component({
  selector: 'investinart-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  result: any;
  image: Image;
  images: Image[];
  selectedImage: Image;

  constructor(public imageService: ImageService,
              private dialogService: DialogService,
              public dialog: MdDialog) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }
  onSelect(image: Image): void {
    this.image = image;
  }

  openDialog(image: Image) {
    this.dialogService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
    this.selectedImage = this.image;
}

  // openDialog(image: Image) {
  //   this.selectedImage = image;
  //   const dialog = this.dialog.open(DialogComponent);
  //   (<any>dialog.componentInstance).this.image = image;


  // }

}
