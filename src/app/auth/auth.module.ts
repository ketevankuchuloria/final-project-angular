import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AuthRoutingModule, SharedModule, FormsModule
  ],
  declarations: [SignUpComponent,SignInComponent]
})
export class AuthModule { }
