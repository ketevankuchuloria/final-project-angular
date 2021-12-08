import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (
    private translateService: TranslateService,
    private router: Router){}

  toEn(){
     this.translateService.setDefaultLang('en')
  }

  toKa(){
    this.translateService.setDefaultLang('ka')
  }

  goToAuth(){
    this.router.navigate(['auth']);
  }

  goToContent(){
    this.router.navigate(['content', 'list']);
  }

  goToDetails(){
    // this.router.navigate(['details']);
  }

  ngOnInit() {
  }

}
