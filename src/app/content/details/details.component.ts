// import { Component, OnInit } from "@angular/core";
// import { ActivatedRoute, Router } from "@angular/router";
// import { Observable } from "rxjs";
// import { finalize, tap } from "rxjs/operators";
// import { LoadingService } from "src/app/services";
// import { FireApiService } from "src/app/services/fire-api.service";
// import { ArtBody, ArtResult } from "../models";
// import { ArtApiService } from "../services";

// @Component({
//   selector: "app-details",
//   templateUrl: "./details.component.html",
//   styleUrls: ["./details.component.scss"],
// })
// export class DetailsComponent implements OnInit {
//   storeData$: Observable<ArtBody | undefined> | undefined;
//   artData$: Observable<ArtResult> | undefined;
//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private fireApiService: FireApiService,
//     private artApiService: ArtApiService,
//     private router: Router,
//     private loadingService: LoadingService
//   ) {}
//   private initArtDetails() {
//     const id = this.activatedRoute.snapshot.params["id"];
//     this.loadingService.start();
//     this.storeData$ = this.fireApiService.getArt(id).pipe(
//       tap((art) => {
//         if (art) {
//           this.artData$ = this.artApiService
//             .getArtByObjectId(art.objectIds)
//             .pipe(finalize(() => this.loadingService.stop()));
//         }
//       })
//     );
//   }
//   goBack() {
//     this.router.navigate(["content"]);
//   }

//   ngOnInit() {
//     this.initArtDetails();
//   }
// }
