import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'investin-art-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }


  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      // this.router.navigate(['']);
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
      // this.router.navigate(['']);
  }

}
