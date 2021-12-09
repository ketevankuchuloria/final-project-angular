import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './notFound/notFound.component';



@NgModule({
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [HeaderComponent, NotFoundComponent],
  declarations: [HeaderComponent, NotFoundComponent]
})
export class ShellModule { }
