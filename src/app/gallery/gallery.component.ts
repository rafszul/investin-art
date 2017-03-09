import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';


@Component({
  selector: 'investin-art-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  // tiles = [
  //   { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  //   { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  //   { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  //   { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  // ];

  images: FirebaseListObservable<any[]>;

  constructor(af: AngularFire,
    private vcr: ViewContainerRef,
    private mdDialog: MdDialog) {

    this.images = af.database.list('/images');


  }

  ngOnInit() {
  }


}

@Component({
  selector: 'add-message',
  template: `<p>empty component muahaha</p>`
})
export class AddMessageComponent {

}
