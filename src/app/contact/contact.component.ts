import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
  selector: 'investin-art-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, af: AngularFire,
    private vcr: ViewContainerRef,
    private mdDialog: MdDialog, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Logged out');
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';

        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log('Logged in');
          console.log(auth);

        }
      }
    );
  }
  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['contact']);
    });
  }
  ngOnInit() {
  }

  // addMessage() {
  //   // Open dialog to add add message
  //   // 1. create dialog config
  //   const dialogConfig = new MdDialogConfig();
  //   dialogConfig.viewContainerRef = this.vcr;
  //   // 2. open dialog
  //   const dialog = this.mdDialog.open(AddMessageComponent, dialogConfig);
  //   // 3. pass selected model to dialog
  //   // (<any>dialog.componentInstance).selectedImage = this.selectedImage;
  // }
}

// @Component({
//   selector: 'add-message',
//   template: `
//   <form (submit)="addMessage()">
//     <md-input-container>
//       <input mdInput name="message" [(ngModel)]="message" placeholder="Message">
//     </md-input-container>
//     <button md-raised-button color="accent">Add Message</button>
//   </form>
//   `
// })
// export class AddMessageComponent {
//   message = '';

//   constructor(private mdDialogRef: MdDialogRef<AddMessageComponent>) { }

//   addMessage() {
//     // 1. create message
//     const newMessage = { who: 'John Doe', content: this.message };
//     // 2. add message to selected model
//     // const selectedModel : Image = (<any>this.mdDialogRef.componentInstance).selectedModel;
//     // selectedModel.messages.push(newMessage);
//     // 3. close dialog
//     this.mdDialogRef.close();
//   }
// }
