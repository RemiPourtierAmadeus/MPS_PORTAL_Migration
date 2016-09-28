import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NewsItemComponent} from "./news-item/news-item.component";

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ NewsItemComponent ],
  exports:[NewsItemComponent],
  providers: []
})
export class MyCommonModule { }
