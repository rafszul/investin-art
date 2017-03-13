import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FIREBASE_PROVIDERS, AngularFire, FirebaseListObservable } from 'angularfire2';
// import { Http } from '@angular/http';

@Injectable()
export class ImagesService {

  images: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {};

  getImages() {
    this.images = this.af.database.list('/images') as FirebaseListObservable<Images[]>;
    return this.images;

    // http.get('https://investin-art.firebaseio.com/.json').map(
    //   (res) => res.json()
    // );

  }
}
interface Images {
    id?: string;
    img?: string;
    imgsmall?: string;
    imgsq?: string;
    imgname?: string;
    title?: string;
    year?: string;
    medium?: string;
    size?: string;
    name?: string;
    price?: string;
}


