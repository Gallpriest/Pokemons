import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  POKEMON_DATA: {};
  POKEMON_LIST: any[] = [];

  constructor(private httpService: ConfigService) {
  }

  async getPokemonList() {
    this.POKEMON_DATA = await this.httpService.getPokemons().toPromise();
    for (let i = 1; i <= 20; i++) {
      this.POKEMON_LIST.push(await this.httpService.getOnePokemon(i).toPromise());
    }
    return this.POKEMON_LIST;
  }
}
