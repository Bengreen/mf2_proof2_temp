import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe1benModule } from './mfe1ben/mfe1ben.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mfe1benModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
