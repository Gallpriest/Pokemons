import { Component, OnInit } from '@angular/core';
import { searchButton, formInput } from './mock-form';
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
  SEARCH_PARAMETERS: SearchParams;

  constructor(private httpService: ConfigService) { }

  ngOnInit() {
    this.httpService.getPokemons().subscribe(data => this.POKEMONS_LIST = data);
  }

  startSearch() {
    this.httpService.getOnePokemon(10).subscribe(pokemon => console.log(pokemon));
  }

  pokemonNameHandler(value: string) {
    console.log(value)
  }
}
