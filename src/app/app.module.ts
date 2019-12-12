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
//--Importo modulo http para hacer envios o consumir informacion
import { HttpClientModule } from '@angular/common/http';
//--
//--Para el desarrollo de las animaciones
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//--
import {SecondsToTimeFormat} from './pipes/SecondsToTimeFormat.pipe'
//-Importo las directivas
import {RedBorder} from './directives/RedBorder.directive';
//--Importo el servicio
import {ArticlesService  } from './services/articles.service';
import { ArticlesComponent } from './articles/articles.component';

//-
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullscreenComponent,
    UserCardComponent,
    SecondsToTimeFormat,
    RedBorder,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
