import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-no-results-search',
  templateUrl: './no-results-search.component.html',
  styleUrls: ['./no-results-search.component.scss']
})
export class NoResultsSearchComponent implements OnChanges {
  @Input() searchText: string;
  noQueryMessage = 'No se encontraron resultados para la búsqueda';
  constructor() { }

  ngOnChanges(...args: any[]) {
    this.searchText = args[0].searchText.currentValue;
  }

}
