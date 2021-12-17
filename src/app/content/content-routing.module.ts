import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { ContentComponent } from "./content.component";
import { ListComponent } from "./list/list.component";

// import { DetailsComponent } from './details/details.component';
// import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "add",
    component: AddComponent,
  },

  {
    path: "list",
    component: ListComponent,
  },
  // {
  //     path: 'details/:id',
  //     component: DetailsComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
