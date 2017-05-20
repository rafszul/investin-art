import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForCollectorsComponent } from './for-collectors/for-collectors.component';
import { ForArtistsComponent } from './for-artists/for-artists.component';
import { ForInvestorsComponent } from './for-investors/for-investors.component';
import { HelloComponent } from './hello/hello.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { TandcComponent } from './tandc/tandc.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: TeamComponent },
  { path: 'tandc', component: TandcComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'collectors', component: ForCollectorsComponent },
  { path: 'artists', component: ForArtistsComponent },
  { path: 'investors', component: ForInvestorsComponent },
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
