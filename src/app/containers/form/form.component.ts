import { Component, OnInit } from '@angular/core';
import { searchButton, formInput, pokemonTypes } from './mock-form';
import { ConfigService } from 'src/app/services/config.service';
import { SearchParams } from './interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  button = searchButton;
  input = formInput;
  POKEMONS_LIST: {};
  POKEMON_TYPES = pokemonTypes;
  SEARCH_PARAMETERS: SearchParams;
  // poison, grass, fire, flying, bug, water, normal
  constructor(private httpService: ConfigService) { }

  ngOnInit() {
    this.httpService.getPokemons().subscribe(data => this.POKEMONS_LIST = data);
  }

  startSearch() {
    for (let i = 1; i < 20; i++) {
      this.httpService.getOnePokemon(i).subscribe(pokemon => console.log(pokemon));
    }
  }

  pokemonNameHandler(value: string) {
    console.log(value)
  }
}
