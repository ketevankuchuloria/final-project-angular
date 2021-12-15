import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ArtApiService } from './services/art-api.service';
import { AddFacade } from './add/add.facade';

// import { AddComponent } from './add/add.component';
// import { ListComponent } from './list/list.component';
// import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,  
    SharedModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [ContentComponent, AddComponent],
  providers: [ArtApiService, AddFacade]
})
export class ContentModule { }
