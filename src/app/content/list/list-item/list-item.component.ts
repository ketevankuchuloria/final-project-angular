import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ListItem } from "../../models";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() item: ListItem | undefined;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate([`content/${this.item?.data.id}`]);
  }

  ngOnInit() {}
}
