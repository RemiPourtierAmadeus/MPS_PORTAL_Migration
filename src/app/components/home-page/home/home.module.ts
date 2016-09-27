import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NewsPanelComponent, PerformancePanelComponent, MetricsPanelComponent} from "../index";
import {ManageNewsService} from "../../../shared/services/manage-news.service";

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, MetricsPanelComponent, PerformancePanelComponent, NewsPanelComponent],
  exports: [HomeComponent],
  providers : [ManageNewsService],
})

export class HomeModule { }
