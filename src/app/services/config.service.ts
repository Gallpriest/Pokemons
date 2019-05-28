import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(this.url);
  }

  getOnePokemon(id: number) {
    return this.http.get(`${this.url}${id}`)
  }
}