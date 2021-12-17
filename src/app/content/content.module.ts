import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentComponent } from "./content.component";
import { ContentRoutingModule } from "./content-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { AddComponent } from "./add/add.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ArtApiService } from "./services/art-api.service";
import { AddFacade } from "./add/add.facade";
import { CharacterDirective } from "./add/character.directive";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list/list-item/list-item.component";

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ContentComponent,
    AddComponent,
    CharacterDirective,
    ListComponent,
    ListItemComponent,
  ],
  providers: [ArtApiService, AddFacade],
})
export class ContentModule {}
