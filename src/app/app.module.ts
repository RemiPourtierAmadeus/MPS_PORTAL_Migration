import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ConnectionContentModule} from "./components/connection/connection-content/connection-content.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ConnectionContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
