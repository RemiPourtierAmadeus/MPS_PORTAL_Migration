import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MetricsComponent} from "./metrics.component";
import {PanelComponent} from "./panel/panel.component";
import {ManageMetricsService} from "../../shared/services/metrics/manage-metrics.service";


@NgModule({
  imports: [ CommonModule],
  declarations: [MetricsComponent, PanelComponent],
  exports: [MetricsComponent],
  providers : [ManageMetricsService]
})

export class MetricsModule { }
