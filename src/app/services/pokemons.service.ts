import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {forkJoin} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpService: ConfigService) {
  }

  private checkIfPokemonHasType(pokemonTypes, queryParamsType) {
    let isExist: boolean;
    const keys = pokemonTypes.map(item => item.type).map(el => el.name);
    isExist = keys.includes(queryParamsType);
    return isExist;
  }

  private checkForPassedParams(parameter) {
    const arr = [];
    if (parameter !== '') {
      arr.push(parameter);
    } else {}
    return arr;
  }

  getPokemonList() {
    const POKEMON_LIST = [];
    for (let i = 1; i <= 20; i++) {
      const obs$ = this.httpService.getOnePokemon(i);
      POKEMON_LIST.push(obs$);
    }
    return forkJoin(POKEMON_LIST);
  }

  getFilteredPokemonList(queryParams) {
    const { name, type } = queryParams;
    const parametersArray = [
      ...this.checkForPassedParams(name),
      ...this.checkForPassedParams(type)
    ];

    return this.getPokemonList().pipe(
      map(list => list.filter(elem => {
        switch(parametersArray.length) {
          case 1:
            if (parametersArray.includes(name)) {
              return elem.name === name;
            }
            if (parametersArray.includes(type) && this.checkIfPokemonHasType(elem.types, type)) {
              return elem;
            }
            break;
          case 2:
            if (elem.name === name && this.checkIfPokemonHasType(elem.types, type)) {
              return elem;
            }
            break;
          default:
            return false;
        }
      }))
    );
  }
}


