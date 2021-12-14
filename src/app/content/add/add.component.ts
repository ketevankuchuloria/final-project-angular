import { Component, OnInit } from '@angular/core';
import { AddFacade } from './add.facade';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddFacade]
})
export class AddComponent implements OnInit {

  lastThreeSearches = ['aaa','bbb', 'ccc'];
  
  searchKey: string = '';

  searchHasError = false;

  constructor(private facade: AddFacade) { }

  search(){
   if(!this.searchKey){
     this.searchHasError = true;
     return;
   }

   this.searchHasError = false;
   
   this.facade.fetchArt(this.searchKey)
  }

  ngOnInit() {
  }

}
