import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItalokComponent } from './italok/italok.component';

import { NewsDirective } from './news.directive';
import { MoreNewsDirective } from './more-news.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItalokComponent,
    NewsDirective,
    MoreNewsDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
