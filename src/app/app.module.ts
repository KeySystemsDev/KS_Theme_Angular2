import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { LoadingModule } from 'ngx-loading';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule, Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

// Rutas
import { app_routing } from "./app.routes";

// HTML
import { AppComponent } from './app.component';
import { IndexComponent } from './html/index/index';
import { ListComponent } from './html/list/list';
import { DetailComponent } from './html/detail/detail';
import { SearchComponent } from './html/search/search';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing,
    LoadingModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    BootstrapModalModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot()
  ],
  providers: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
