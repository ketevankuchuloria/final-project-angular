import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get isEn(): boolean {
    return this.isLanguage('en');
  }
  get isKa(): boolean {
    return this.isLanguage('en');
  }
  // get isLoggedIn(): boolean {
  //   return this.auth.isLoggedIn;
  // }
  constructor (
    private translateService: TranslateService,
    private router: Router,
 
    
   
    ){}

    en(){
     this.translateService.setDefaultLang('en')
  }

    ka(){
    this.translateService.setDefaultLang('ka')
  }

  goToSignIn() {
    this.router.navigate(['sign-in']);
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }

  // goToAuth(){
  //   this.router.navigate(['auth']);
  // }

  // goToContent(){
  //   this.router.navigate(['content', 'list']);
  // }
  
  // signOut() {
  //   this.auth.signOut().then(() => {
  //     this.router.navigate(['sign-in']);
  //   });
  

  private isLanguage(lang: string): boolean {
    const defaultLang = this.translateService.defaultLang;
    const currentLang = this.translateService.currentLang;
    return currentLang ? currentLang === lang : defaultLang === lang;
  }

  ngOnInit() {
  }

}
