import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from "./app.routes";

// HTML
import { AppComponent } from './app.component';
import { IndexComponent } from './html/index/index';
import { ListComponent } from './html/list/list';
import { DetailComponent } from './html/detail/detail';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
