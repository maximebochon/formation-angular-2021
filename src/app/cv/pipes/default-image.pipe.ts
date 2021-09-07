import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTS } from '../../constants';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string|null|undefined): unknown {
    value = value ? value.trim() : value;
    return value ? value : CONSTANTS.defaultImage;
  }

}
