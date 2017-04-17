import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
// import { Image, ImageService } from '../';

@Component({
  selector: 'investinart-dialog',
  templateUrl: './dialog.component.html',
    // template: `
    //     <p>{{ title }}</p>
    //     <p>{{ message }}</p>
    //     <button type="button" md-raised-button 
    //         (click)="dialogRef.close(true)">OK</button>
    //     <button type="button" md-button 
    //         (click)="dialogRef.close()">Cancel</button>
    // `,
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

  public title: string;
  public message: string;
  // images: any;
  constructor(public dialogRef: MdDialogRef<DialogComponent>) { }
    // private imageService: ImageService,
    // public dialogRef: MdDialogRef<DialogComponent>) { }

  ngOnInit() {
    // this.images = this.imageService.getImages();

    // this.imagesService.getImages().subscribe(images => {
    //   console.log(images);
    //   this.images = images;
    // });
  }

}
