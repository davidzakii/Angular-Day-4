import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStock'
})
export class ShowStockPipe implements PipeTransform {

  transform(value : number): any{
    if(value == 0){
      return "not available in stock"
    }
    return "in stock"
  }

}
