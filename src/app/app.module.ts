import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ConnectionContentModule} from "./components/connection/connection-content/connection-content.module";
import {HomeModule} from "./components/home-page/home/home.module";
import {NewsModule} from "./components/news/news/news.module";
import {MyCommonModule} from "./mycommon/mycommon.module";
import {MetricsModule} from "./components/metrics/metrics.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ConnectionContentModule,
    HomeModule,
    NewsModule,
    MetricsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
