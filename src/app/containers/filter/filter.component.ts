import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {
  canHaveItems = [
    { label: 'Yes' },
    { label: 'No' }
  ];
  @Input() filteredPokemons: Observable<any>;
  abilities: any[] = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.filteredPokemons.pipe(
      map(list => console.log(list[0].abilities))
    ).subscribe(console.log)
  }

}
