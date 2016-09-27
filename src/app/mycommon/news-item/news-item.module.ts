import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsItemComponent} from "./news-item.component";
import {NewsFormComponent} from "../../components/news/index";
import {NewsConstantService} from "../../shared/services/news-constant.service";
import {ManageNewsService} from "../../shared/services/manage-news.service";

@NgModule({
  imports: [CommonModule],
  declarations: [NewsItemComponent, NewsFormComponent],
  exports: [NewsItemComponent],
  providers : [ManageNewsService, NewsConstantService],
})

export class NewsItemModule { }
