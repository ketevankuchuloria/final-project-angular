import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services';
import { Art } from '../models';
import { AddFacade } from './add.facade';
import { addArtStorage } from './addArt.storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AddFacade, addArtStorage], 
})
export class AddComponent implements OnInit {  
  searchKey: string = '';

  selectedArt$: Observable<Art> | null = null;

  searchHasError = false;

  get lastThreeSearches(): string[]{
    return this.facade.lastThreeSearches;
  }
  

  constructor(private facade: AddFacade, private auth: AuthService) { }

  search(){
   if(!this.searchKey){
     this.searchHasError = true;
     return;
   }

   this.searchHasError = false;

  this.facade.addToLastThreeSearches(this.searchKey);
  this.fetchArt(this.searchKey);
  }
  fetchArt(title: string){
    this.selectedArt$ = this.facade.fetchArt(title)
  }

  ngOnInit() {
  }

}
