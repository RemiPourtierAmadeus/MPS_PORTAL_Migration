import { Route } from '@angular/router';
import { HomeComponent } from './index';
import {NewsComponent} from "./news.component";

export const NewsRoutes: Route[] = [
  {
    path: '/news',
    component:NewsComponent
  }
];
