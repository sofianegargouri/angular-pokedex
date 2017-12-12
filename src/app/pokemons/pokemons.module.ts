import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonLoaderComponent } from '../pokemon-loader/pokemon-loader.component';

import { PokemonService } from '../pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonLoaderComponent,
  ],
  providers: [
    PokemonService,
  ]
})
export class PokemonsModule { }
