import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'investin-art-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  value: any;
  
  submit(form) {
    this.value = form; 
}

  constructor() { }

  ngOnInit() {
  }

}
