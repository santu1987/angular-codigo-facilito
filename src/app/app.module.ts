import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TitleComponent  } from './title/title.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { UserCardComponent } from './user-card/user-card.component';
//-Import formularios
import { FormsModule } from '@angular/forms';
//-
import {SecondsToTimeFormat} from './pipes/SecondsToTimeFormat.pipe'
//-
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullscreenComponent,
    UserCardComponent,
    SecondsToTimeFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
