import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { HelloComponent } from './hello/hello.component';



const routes: Routes = [
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'gallery', component: GalleryComponent },
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

