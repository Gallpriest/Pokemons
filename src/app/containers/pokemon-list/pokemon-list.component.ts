import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemons.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  paramsSubscription;
  pokemonInfo: any[] = [];
  filteredPokemons: [] = [];
  FILTER_PARAMS = { name: '', type: '' };

  constructor(
    private pokemonService: PokemonService,
    private activeRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.pokemonInfo = await this.pokemonService.getPokemonList();
    this.paramsSubscription = this.activeRoute.queryParams.subscribe(
      (params) => {
        this.FILTER_PARAMS.name = params.name;
        this.FILTER_PARAMS.type = params.type;
      }
    );

    console.log(this.FILTER_PARAMS)
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
