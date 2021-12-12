import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
// import { AddComponent } from './add/add.component';
// import { ListComponent } from './list/list.component';
// import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,  
  ],
  declarations: [ContentComponent]
})
export class ContentModule { }
