import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemons.service';
import {ActivatedRoute} from '@angular/router';
import {catchError, filter, switchMap, tap, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {filterButton} from './mock-filter';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  filteredPokemonArray$: Observable<any[]>;
  isError = false;
  button = filterButton;
  isOpened = false;

  constructor(
    private pokemonService: PokemonService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.filteredPokemonArray$ = this.activeRoute.queryParams
      .pipe(
        tap(() => this.isError = false),
        switchMap((params) => this.pokemonService.getFilteredPokemonList(params)),
        tap(list => console.log(list)),
        catchError((error) => { this.isError = true; throw error; })
      );
  }

  openFilter() {
    this.isOpened = !this.isOpened;
  }

  filteredItems(value: boolean) {
    this.filteredPokemonArray$.pipe(
      map(list => list.filter(pokemon => !!pokemon.held_items.length === value))
    ).subscribe();
  }
}
