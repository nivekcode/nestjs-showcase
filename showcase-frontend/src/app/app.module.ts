import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavComponent} from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import {PlayersModule} from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
