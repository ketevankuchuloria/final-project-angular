import { Component, OnInit } from '@angular/core';
import { Art } from '../models';
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

  selectedArt: Art | null = null;

  constructor(private facade: AddFacade) { }

  search(){
   if(!this.searchKey){
     this.searchHasError = true;
     return;
   }

   this.searchHasError = false;

   
   this.facade
   .fetchArt(this.searchKey)
   .subscribe((art) => (this.selectedArt = art));
  }

  ngOnInit() {
  }

}
