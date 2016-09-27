/**
 * Component MetricsPanelComponent
 */

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'metrics-panel',
    templateUrl: './metrics-panel.component.html',
    styleUrls : ['./metrics-panel.component.scss']
})
export class MetricsPanelComponent {

    @Output() openMetrics=new EventEmitter<number>();

    constructor(){}

    openMetricsPage(){
        this.openMetrics.emit(4);
    }
}
