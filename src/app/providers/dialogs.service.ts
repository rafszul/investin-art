import { Observable } from 'rxjs/Rx';
import { ImgDetailsComponent } from './../img-details/img-details.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {


        let dialogRef: MdDialogRef<ImgDetailsComponent>;

        dialogRef = this.dialog.open(ImgDetailsComponent);
        // dialogRef.componentInstance.title = title;
        // dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
