import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { AuthService } from "src/app/services";
import { RATINGS } from "../content.model";
import { Art } from "../models";
import { AddFacade } from "./add.facade";
import { addArtStorage } from "./addArt.storage.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
  providers: [AddFacade, addArtStorage],
})
export class AddComponent implements OnInit {
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
    private formBuilder: FormBuilder
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

  submit() {
    console.log("form is valid", this.form.valid);

    console.log("form value", this.form.value);

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((x) => console.log(x));

    console.log("submitting");

    this.submitted = true;
  }

  ngOnInit() {
    this.buildForm();
  }
}
