import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

// import {Observable} from 'rxjs/Observable';
// import { FIREBASE_PROVIDERS, AngularFire, FirebaseListObservable } from 'angularfire2';

// import { Http } from '@angular/http';

@Injectable()
export class ImagesService {

  images: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {};

  getImages(): FirebaseListObservable<Images[]> {
  return this.af.database.list('/images');
}
}

// this is from https://blog.realworldfullstack.io/real-world-angular-part-5-light-my-fire-34b0bcb351a8#.u5yt4zqv7
//
//     export class CategoryService {
//   constructor(private af: AngularFire) { 
//   }
//   getCategories(): Observable<Category[]> {
//     return this.af.database.list('/categories');
//   }
// }
//
// and this is my impl:
//
// getImages(): FirebaseListObservable<Images[]> {
//   return this.af.database.list('/images');
// }
// which is the same as:
//
//   getImages() {
  //   this.images = this.af.database.list('/images') as FirebaseListObservable<Images[]>;
  //   return this.images;
  // }
//
// this is ninja;
//
    // http.get('https://investin-art.firebaseio.com/.json').map(
    //   (res) => res.json()
    // );



interface Images {
    // $key: $value;
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


