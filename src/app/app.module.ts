import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SerbianTransliteratorModule } from 'serbian-transliterator';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SerbianTransliteratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
