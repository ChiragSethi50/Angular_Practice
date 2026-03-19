import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLastName',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: unknown, args: unknown[]): unknown {
    return `${value} ${args[0]}, age: ${args[1]}`;
  }
}
