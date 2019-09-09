import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';



@NgModule({
  declarations: [PlayersComponent],
  exports: [PlayersComponent],
  imports: [
    CommonModule
  ]
})
export class PlayersModule { }
