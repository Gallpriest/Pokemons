import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  canHaveItems = [
    { label: 'Yes' },
    { label: 'No' }
  ];
  @Input() filteredPokemons: Observable<any>;
  @Output() chosenItemsValue = new EventEmitter();
  pokemonsFilteredData = { items: [], abilities: [] };
  filterSubscription;

  constructor() { }

  ngOnInit() {
    this.filterSubscription = this.filteredPokemons.subscribe((list) => {
      const items = list.map(pokemon => ({ [pokemon.name]: !!pokemon.held_items.length }));
      const abilities = list.map(pokemon =>
        pokemon.abilities
          .map(it => it.ability.name))
          .reduce((curr, next) => { return [...curr, ...next] }, [])
          .filter((string, index, self) => self.indexOf(string) === index);
      this.pokemonsFilteredData.items = items;
      this.pokemonsFilteredData.abilities = abilities.map(ability => ({ label: ability }));
      console.log(this.pokemonsFilteredData)
    });
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  checkItems(eventVal) {
    eventVal.label === 'Yes' ?
      this.chosenItemsValue.emit(true) :
      this.chosenItemsValue.emit(false);
  }

}
