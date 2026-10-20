import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { catchError, finalize, of, tap } from 'rxjs';
import { PokemonService } from '../../shared/services/pokemon.service';
import { PokemonListItem } from '../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonListComponent implements OnInit {
  private readonly pokemonService = inject(PokemonService);

  readonly pokemons = signal<PokemonListItem[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.pokemonService
      .getPokemons(0, 24)
      .pipe(
        tap((list) => this.pokemons.set(list)),
        catchError(() => {
          this.error.set('No se pudo cargar la lista de Pokémon.');
          return of(null);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe();
  }
}
