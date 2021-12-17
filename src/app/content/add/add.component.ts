import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AuthService } from "src/app/services";
import { EventBusService } from "src/app/services/event.buss.service";
import { FORM_RESET_EVENT_KEY, RATINGS } from "../content.model";
import { Art, ArtBody } from "../models";
import { AddFacade } from "./add.facade";
import { addArtStorage } from "./addArt.storage.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
  providers: [AddFacade, addArtStorage],
})
export class AddComponent implements OnInit {
  private unsubscribe$ = new Subject();

  form: FormGroup = new FormGroup({});

  searchKey: string = "";

  selectedArt$: Observable<Art> | null = null;

  searchHasError = false;

  get lastThreeSearches(): string[] {
    return this.facade.lastThreeSearches;
  }

  submitted = false;

  get ratings(): number[] {
    return RATINGS;
  }

  constructor(
    private facade: AddFacade,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private eventBus: EventBusService
  ) {}

  search() {
    if (!this.searchKey) {
      this.searchHasError = true;
      return;
    }

    this.searchHasError = false;

    this.facade.addToLastThreeSearches(this.searchKey);
    this.fetchArt(this.searchKey);
  }
  fetchArt(title: string) {
    this.selectedArt$ = this.facade.fetchArt(title);
  }

  private buildForm() {
    // this.form = new FormGroup({
    //   review: new FormControl("", [
    //     Validators.required,
    //     Validators.minLength(10),
    //   ]),
    //   rating: new FormControl(1),
    // });
    this.form = this.formBuilder.group({
      review: ["", [Validators.required, Validators.minLength(10)]],
      rating: 1,
    });
  }

  submit(selectedArt: Art) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const value = this.form.value;

    console.log(selectedArt);
    const body: ArtBody = {
      objectIds: selectedArt.objectID,
      uid: this.auth.userId,
      rating: value.rating,
      review: value.review,
    };

    console.log(body);

    this.facade.submit(body);
  }

  private formReset() {
    this.form.reset();
    this.form.updateValueAndValidity();

    this.submitted = false;

    this.form.get("review")?.setValue("");
    this.form.get("rating")?.setValue(1);
  }

  ngOnInit() {
    this.buildForm();
    this.facade.restoreState();
    this.eventBus
      .on(FORM_RESET_EVENT_KEY)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.formReset());
  }
}
