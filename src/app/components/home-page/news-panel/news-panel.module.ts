import { NgModule } from '@angular/core';
import {MyCommonModule, NewsItemComponent} from "../../../mycommon/mycommon.module"
import {NewsPanelComponent} from "../index";
import {NewsConstantService} from "../../../shared/services/news-constant.service";

@NgModule({
  imports: [MyCommonModule],
  declarations: [ NewsPanelComponent, NewsItemComponent],
  exports: [NewsPanelComponent],
  providers : [NewsConstantService]
})

export class NewsPanelModule { }
