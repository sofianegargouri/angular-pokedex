import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { PokemonLoaderComponent } from '../pokemon-loader/pokemon-loader.component'

import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  id: number;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) {
    router.events.subscribe ( event => {
      if( event instanceof NavigationEnd ){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getPokemon();
      }
  } );
  }

  ngOnInit() {
  }

  getPokemon() {
    this.loading = true;
    this.pokemonService
      .getPokemon(this.id)
      .subscribe(pokemon => {
        this.pokemon = pokemon
        this.getLocalizedPokemon()
      });
  }

  getLocalizedPokemon() {
    this.pokemonService
      .getLocalizedPokemon(this.id)
      .subscribe(pokemon => {
        this.pokemon = {
          ...this.pokemon,
          name: pokemon.names.find(data => data.language.name === 'fr').name,
          description: pokemon.flavor_text_entries.find(data => data.language.name === 'fr').flavor_text,
        }
        this.loading = false;
      })
  }
}
