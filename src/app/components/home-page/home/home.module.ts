import { NgModule } from '@angular/core';
import {MyCommonModule} from "../../../mycommon/mycommon.module";
import { HomeComponent } from './home.component';
import {NewsPanelComponent, PerformancePanelComponent, MetricsPanelComponent} from "../index";
import {ManageNewsService} from "../../../shared/services/manage-news.service";
import {NewsConstantService} from "../../../shared/services/news-constant.service";

@NgModule({
  imports: [MyCommonModule],
  declarations: [HomeComponent, MetricsPanelComponent, PerformancePanelComponent, NewsPanelComponent],
  exports: [HomeComponent],
  providers : [ManageNewsService, NewsConstantService]
})

export class HomeModule { }
