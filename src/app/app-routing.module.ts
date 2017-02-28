import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelloComponent } from './hello/hello.component';
import { OtherComponent } from './other/other.component';
import { ArtistsComponent } from './artists/artists.component';


const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent },
  { path: 'email', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'art', component: GalleryComponent },

  { path: 'other', component: OtherComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artists', component: ArtistsComponent },

  { path: '',  children: [] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
