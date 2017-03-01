import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'investin-art-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService) {
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
  ngOnInit() {
  }

}
