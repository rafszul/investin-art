import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ImagesService } from '../providers/images.service';

@Component({
  selector: 'investin-art-img-details',
  templateUrl: './img-details.component.html',
  styleUrls: ['./img-details.component.scss']
})
export class ImgDetailsComponent implements OnInit {
  images: any;
  constructor(
    private imagesService: ImagesService,
    public dialogRef: MdDialogRef<ImgDetailsComponent>) { }

  ngOnInit() {
    // this.imagesService.getImages().subscribe(images => {
    //   console.log(images);
    //   this.images = images;
    // });
  }

}
