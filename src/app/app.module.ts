import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ConnectionContentModule} from "./components/connection/connection-content/connection-content.module";
import {HomeModule} from "./components/home-page/home/home.module";
import {NewsModule} from "./components/news/news/news.module";
import {MyCommonModule} from "./mycommon/mycommon.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ConnectionContentModule,
    HomeModule, NewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
