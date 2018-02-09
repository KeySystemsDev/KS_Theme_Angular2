
import { RouterModule, Routes } from '@angular/router';

import {
  IndexComponent,
  ListComponent,
  DetailComponent,
  SearchComponent
} from "./html/index.paginas";

const app_routes: Routes = [
    { path: 'index', component: IndexComponent},
    { path: 'list', component: ListComponent},
    { path: 'detail/:id', component: DetailComponent},
    { path: 'search/:name', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });