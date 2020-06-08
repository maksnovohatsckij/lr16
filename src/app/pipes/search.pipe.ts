import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], search: string) {
    if ((search != "" || search != null)) {
      return arr.filter(worker => (worker.name + " " + worker.surname).toLowerCase().indexOf(search.toLowerCase()) !== -1);
    };
  }

}
