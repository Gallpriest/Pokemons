import { Component, OnInit } from '@angular/core';
import { searchButton, formInput, pokemonTypes } from './mock-form';
import { SearchParams, PokemonTypes } from './interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  button = searchButton;
  input = formInput;
  POKEMON_TYPES: PokemonTypes[] = pokemonTypes;
  SEARCH_PARAMETERS: SearchParams = { name: '', typeData: { id: '', type: '' } };

  constructor(private route: Router) { }

  ngOnInit() {}

  pokemonTypeHandler(value) { this.SEARCH_PARAMETERS.typeData = value; }

  pokemonNameHandler(value: string) { this.SEARCH_PARAMETERS.name = value; }

  startSearch() {
    this.route.navigate(
      ['list'],
      { queryParams:
          { name: this.SEARCH_PARAMETERS.name,
            type: this.SEARCH_PARAMETERS.typeData.type
          }
      });
  }
}
