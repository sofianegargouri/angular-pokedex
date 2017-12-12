import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { PokemonPayload } from './pokemon-payload'

@Injectable()
export class PokemonService {
  private basePath = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient) { }

  getPokemons(): Observable<PokemonPayload> {
    return this.http.get<PokemonPayload>(`${this.basePath}/pokemon/?limit=151`);
  }

  getPokemon(id): Observable<Object> {
    return this.http.get<PokemonPayload>(`${this.basePath}/pokemon/${id}`);
  }

  getLocalizedPokemon(id): Observable<PokemonPayload> {
    return this.http.get<PokemonPayload>(`${this.basePath}/pokemon-species/${id}/`);
  }
}
