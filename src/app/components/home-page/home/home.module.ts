import { NgModule } from '@angular/core';
import {MyCommonModule} from "../../../mycommon/mycommon.module";
import { HomeComponent } from './home.component';
import {NewsPanelComponent, PerformancePanelComponent, MetricsPanelComponent} from "../index";
import {ManageNewsService} from "../../../shared/services/manage-news.service";

@NgModule({
  imports: [MyCommonModule],
  declarations: [HomeComponent, MetricsPanelComponent, PerformancePanelComponent],
  exports: [HomeComponent],
  providers : [ManageNewsService],
})

export class HomeModule { }
