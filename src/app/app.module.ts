import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';

// configuration:

import { firebaseConfig } from '../app/providers/firebase.config';

// services:

// import { Image, ImageService, DialogService } from './shared';

// components:

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { ForCollectorsComponent } from './for-collectors/for-collectors.component';
import { ForArtistsComponent } from './for-artists/for-artists.component';
import { ForInvestorsComponent } from './for-investors/for-investors.component';
import { HelloComponent } from './hello/hello.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ForCollectorsComponent,
    ForArtistsComponent,
    ForInvestorsComponent,
    HelloComponent,
    GalleryComponent,
    TeamComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
