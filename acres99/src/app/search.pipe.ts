import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
@Injectable()
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchterm:string): any[] {
    if (!data || !searchterm) return data;
    return data.filter(data =>data.name.toLowerCase().indexOf(searchterm.toLocaleLowerCase())!== -1);
  }
  
}
