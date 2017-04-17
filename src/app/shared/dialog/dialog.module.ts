import { DialogService } from './../dialog.service';
import { MaterialModule } from '@angular/material';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
    exports: [
        DialogComponent,
    ],
    declarations: [
        DialogComponent,
    ],
    providers: [
        DialogService,
    ],
    entryComponents: [
        DialogComponent,
    ]
})
export class DialogModule { }




