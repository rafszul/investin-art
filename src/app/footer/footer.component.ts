import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'investin-art-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 constructor(public authService: AuthService, private router: Router) { }


  loginGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['hello']);
    });
  }

  ngOnInit() {
  }

    logout() {
    this.authService.logout();
    this.router.navigate(['hello']);
  }

}
