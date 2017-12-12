import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PokemonService]
})
export class CoreModule { }
