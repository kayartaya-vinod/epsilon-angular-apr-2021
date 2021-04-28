import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(c: Contact): string {
    let salutation = '';
    if (c.gender === 'Male') {
      salutation = 'Mr.';
    }
    else if (c.gender === 'Female') {
      salutation = 'Ms.';
    }
    // return salutation + c.firstname + ' ' + c.lastname;
    return `${salutation}${c.firstname} ${c.lastname}`;
  }

}
