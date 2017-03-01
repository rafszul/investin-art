import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'investin-art-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'}
];

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router)  {
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

}
