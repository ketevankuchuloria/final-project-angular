import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export interface SignUpForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  
  signUp(form: NgForm){
    if (form.invalid){
      return;
    }
    const { email, password} = form.value;

    this.auth.signUp(form.value).then((user) => this.router.navigate(['content']));
  }

  // register our user

 

  ngOnInit() {
  }

}
