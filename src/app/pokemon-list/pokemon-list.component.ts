import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons = [];
  searchedPokemons = [];
  searchQuery = '';

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pokemonService
      .getPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons.results.map(
          (pokemon, idx) => ({
            ...pokemon,
            id: idx+1,
          })
        )
        this.searchPokemons('')
      });
  }

  searchPokemons(query) {
    this.searchedPokemons = this.pokemons.filter(pokemon =>
      query.length < 1 || pokemon.name.includes(query) || `${pokemon.id}`.includes(query)
    )
  }

  openPokemon(id) {
    this.router.navigateByUrl(`/pokemons/${id}`);
  }
}
