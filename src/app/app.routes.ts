
import { RouterModule, Routes } from '@angular/router';

import {
  IndexComponent,
  ListComponent,
  DetailComponent
} from "./html/index.paginas";

const app_routes: Routes = [
    { path: 'index', component: IndexComponent},
    { path: 'list', component: ListComponent},
    { path: 'detail/:id', component: DetailComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });