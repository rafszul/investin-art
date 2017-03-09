import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// configuration:

import { firebaseConfig } from '../app/config/firebase.config';


// modules:

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';

// components:

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelloComponent } from './hello/hello.component';
import { OtherComponent } from './other/other.component';
import { ArtistsComponent } from './artists/artists.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ThankYouDialogComponent } from './thank-you-dialog/thank-you-dialog.component';

// services:

import { AuthService } from './providers/auth.service';
import { ImageService } from './providers/images.service';
import { AF } from './providers/af';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    HelloComponent,
    OtherComponent,
    ArtistsComponent,
    NavbarComponent,
    ContactComponent,
    ThankYouDialogComponent,
    ImageService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig)],
  providers: [AuthService, ImageService, AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
