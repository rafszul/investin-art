import {
  Component,
  OnInit,
  // ViewChild,
  // ViewContainerRef
} from '@angular/core';

// import { FIREBASE_PROVIDERS, AngularFire, FirebaseListObservable } from 'angularfire2';

// import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
// import { Router } from '@angular/router';
// import { AuthService } from '../providers/auth.service';

import { ImagesService } from '../providers/images.service';

@Component({
  selector: 'investin-art-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // providers: [ImagesService]
})
export class GalleryComponent implements OnInit {

  images: any;

  // images: FirebaseListObservable<any[]>;

  constructor(
    private imagesService: ImagesService
    // private vcr: ViewContainerRef,
    // private mdDialog: MdDialog
    ) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(images => {
      console.log(images);
      this.images = images;
    });
  }


}

// @Component({
//   selector: 'add-message',
//   template: `<p>empty component muahaha</p>`
// })
// export class AddMessageComponent {

// }
