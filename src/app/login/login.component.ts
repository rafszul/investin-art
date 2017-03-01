import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'investin-art-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

    constructor(public authService: AuthService, private router: Router) { this.authService.af.auth.subscribe(
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
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

}
