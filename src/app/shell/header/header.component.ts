import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor (private translateService: TranslateService){}

  toEn(){
     this.translateService.setDefaultLang('en')
  }

  toKa(){
    this.translateService.setDefaultLang('ka')
  }

  ngOnInit() {
  }

}
