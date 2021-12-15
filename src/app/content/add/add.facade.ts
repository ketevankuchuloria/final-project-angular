import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { LoadingService } from "src/app/services";
import { Art, ArtResult } from "../models";
import { ArtApiService } from "../services";


@Injectable() 
 export class AddFacade {
   constructor(
     private ArtApiService: ArtApiService,
     private loadingService: LoadingService){}

    fetchArt(title: string){
     return this.ArtApiService
     .getArt(title)
     .pipe(map<ArtResult, Art>((art)=>({title: art.title})))
    
 }
}