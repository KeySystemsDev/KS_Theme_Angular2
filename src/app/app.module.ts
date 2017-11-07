import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IndexComponent } from './html/index/index';
import { ListComponent } from './html/list/list';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    IndexComponent,
    ListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
