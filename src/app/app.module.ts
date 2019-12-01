import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TitleComponent  } from './title/title.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { UserCardComponent } from './user-card/user-card.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullscreenComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
