import { Injectable } from "@angular/core";
import { ArtApiService } from "../services";


@Injectable() 
 export class AddFacade {
   constructor(private ArtApiService: ArtApiService){}

    fetchArt(title: string){
      this.ArtApiService.getArt(title).subscribe((x) => console.log(x));
    
 }
}