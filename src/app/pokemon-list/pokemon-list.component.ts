import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonService
      .getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons.results
      });
  }

  openPokemon(id) {
    this.router.navigateByUrl(`/pokemons/${id}`);
  }
}
