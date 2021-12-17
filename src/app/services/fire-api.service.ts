import { Injectable } from "@angular/core";
import { ArtBody, ArtWithId } from "../content/models";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from, Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from ".";

@Injectable({
  providedIn: "root",
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addArt(body: ArtBody) {
    return from(this.store.collection("content").add(body));
  }
  // au windows ze var da shen daasave
  getArts(): Observable<ArtWithId[]> {
    return this.store
      .collection<ArtBody>("content", (ref) =>
        ref.where("uid", "==", this.auth.userId)
      )
      .get()
      .pipe(
        map((res) =>
          res.docs.map<ArtWithId>((d) => ({ ...d.data(), id: d.id }))
        )
      );
  }
  getArt(id: string): Observable<ArtBody | undefined> {
    return this.store
      .collection<ArtBody>("content", (ref) =>
        ref.where("uid", "==", this.auth.userId)
      )
      .doc(id)
      .get()
      .pipe(map((res) => res.data()));
  }
}
