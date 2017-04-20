import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { NgxGalleryModule } from 'ngx-gallery';

// configuration:

import { firebaseConfig } from '../app/config/firebase.config';

// services:

import { Image, ImageService, DialogService } from './shared';

// components:

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { GalleryDemo02Component } from './gallery-demo-02/gallery-demo-02.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    HelloComponent,
    AboutComponent,
    DialogComponent
      ],

  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgxGalleryModule
  ],
  providers: [ ImageService, DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
