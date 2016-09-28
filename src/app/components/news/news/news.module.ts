import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MyCommonModule} from "../../../mycommon/mycommon.module";
import { NewsComponent } from './news.component';
import {NewsFilterComponent, NewsFormComponent} from "../index";
import {ManageNewsService} from "../../../shared/services/manage-news.service";
import {NewsConstantService} from "../../../shared/services/news-constant.service";
import {HeaderModule, HeaderComponent} from "../../header/index";


@NgModule({
  imports: [MyCommonModule,CommonModule, FormsModule],
  declarations: [NewsComponent, HeaderComponent, NewsFormComponent, NewsFilterComponent],
  exports: [NewsComponent],
  providers : [ManageNewsService, NewsConstantService]
})

export class NewsModule { }
