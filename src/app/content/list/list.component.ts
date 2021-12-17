import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { finalize, map } from "rxjs/operators";
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
  arts$: Observable<ArtBody[]> | undefined;

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
    this.loadingService.start();
    this.arts$ = this.fireApiService
      .getArts()
      .pipe(finalize(() => this.loadingService.stop()));

    this.fireApiService.getArts().subscribe((x) => console.log(x));
  }
}
