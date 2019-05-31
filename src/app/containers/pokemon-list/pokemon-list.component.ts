import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemons.service';
import {ActivatedRoute} from '@angular/router';
import {catchError, filter, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  filteredPokemonArray$: Observable<any[]>;
  isError = false;

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
}
