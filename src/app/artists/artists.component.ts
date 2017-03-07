import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'investin-art-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.artists = af.database.list('/artists');
  }

  ngOnInit() {
  }

}
