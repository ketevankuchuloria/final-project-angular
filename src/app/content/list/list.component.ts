import { Component, OnInit } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { finalize, map, switchMap } from "rxjs/operators";
import { LoadingService } from "src/app/services";
import { FireApiService } from "src/app/services/fire-api.service";
import { ArtBody, ArtResult, ArtWithId, ListItem } from "../models";
import { ArtApiService } from "../services";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  arts$: Observable<ListItem[]> | undefined;

  constructor(
    private loadingService: LoadingService,
    private fireApiService: FireApiService,
    private artApiservice: ArtApiService
  ) {}

  private mapArtData(data: ArtWithId[]) {
    return data.map((d) =>
      this.artApiservice.getArtByObjectId(d.objectIds).pipe(
        map<ArtResult, ListItem>((art) => ({
          data: d,
          art,
        }))
      )
    );
  }

  ngOnInit() {
    /*
    this.loadingService.start();
    this.arts$ = this.fireApiService.getArts().pipe(
      switchMap((data) => forkJoin(this.mapArtData(data))),
      finalize(() => this.loadingService.stop())
    );
    */

    setTimeout(
      () => this.fireApiService.getArts().subscribe((x) => console.log(x)),
      3000
    );
  }
}
