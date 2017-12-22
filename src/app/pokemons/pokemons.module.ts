import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
} from '@angular/material'

import { PokedexComponent } from '../pokedex/pokedex.component';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonLoaderComponent } from '../pokemon-loader/pokemon-loader.component';

import { PokemonService } from '../pokemon.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
  ],
  declarations: [
    PokedexComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonLoaderComponent,
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonsModule { }
