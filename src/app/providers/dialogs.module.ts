import { DialogsService } from './dialogs.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { ImgDetailsComponent } from './../img-details/img-details.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
    ],
    exports: [
        ImgDetailsComponent,
    ],
    declarations: [
        ImgDetailsComponent,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ImgDetailsComponent,
    ],
})
export class DialogsModule { }
