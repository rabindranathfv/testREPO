import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'cardSearch'
})
@Injectable()
export class CardSearchPipe implements PipeTransform {

  transform(data: any[], fields: string[], value: string): any {
    // Empty data or search value is empty.
    if (!data) { return []; }
    if (!value || value.length === 0) { return data; }

    // Parsing parameters.
    value = value.toString().toLowerCase();

    // Return filtered items.
    let filtered = [];
    for (let i = 0; i < fields.length; i++) {
      const check = Object.values(data.filter(item => item[fields[i]] !== null && item[fields[i]].toString().toLowerCase().indexOf(value) >= 0));
      if (check.length > 0) {
        filtered.push(check);
      }
    }
    filtered = [].concat.apply([], filtered);
    return this.removeDuplicates(filtered, fields[0]);
  }

  removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};
    for(let i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
  }
}
