import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokemonListItem, PokemonListResponse } from '../models/pokemon.model';

const API = 'https://pokeapi.co/api/v2';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);

  getPokemons(offset: number, limit: number): Observable<PokemonListItem[]> {
    return this.http
      .get<PokemonListResponse>(`${API}/pokemon`, { params: { offset, limit } })
      .pipe(
        map((res) =>
          res.results.map((r) => {
            const id = Number(r.url.split('/').filter(Boolean).pop());
            return {
              id,
              name: r.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            };
          }),
        ),
      );
  }
}
