import { Injectable } from "@angular/core";
import { finalize, map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { LoadingService } from "src/app/services";
import { Art, ArtBody, ArtResult } from "../models";
import { ArtApiService } from "../services";
import { addArtStorage } from "./addArt.storage.service";
import { FireApiService } from "src/app/services/fire-api.service";
import { EventBusService } from "src/app/services/event.buss.service";

@Injectable()
export class AddFacade {
  get lastThreeSearches(): string[] {
    return this.storage.lastThreeSearches;
  }
  constructor(
    private ArtApiService: ArtApiService,
    private loadingService: LoadingService,
    private storage: addArtStorage,
    private fireApiService: FireApiService,
    private eventBus: EventBusService
  ) {}

  fetchArt(title: string): Observable<Art> | null {
    this.loadingService.start();
    return this.ArtApiService.getArt(title)
      .pipe(switchMap((x: any) => this.ArtApiService.getList(x.objectIDs[0])))
      .pipe(
        map<ArtResult, Art>((art) => ({
          title: art.title,
          objectID: art.objectID,
          credits: art.creditLine,
          artistBio: art.creditLine,
          imageUrl: art.primaryImageSmall,
          artist: art.artistAlphaSort,
        })),
        finalize(() => {
          this.loadingService.stop();
          this.eventBus.emit("FORM_RESET_EVENT_KEY");
        })
      );
  }
  addToLastThreeSearches(key: string) {
    this.storage.addTolastSearches(key);
  }
  restoreState() {
    this.storage.restoreState();
  }
  submit(body: ArtBody) {
    this.fireApiService.addArt(body).subscribe((x) => console.log(x));
  }
}
