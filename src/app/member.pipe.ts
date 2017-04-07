import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'member',
  pure: false
})

export class MemberPipe implements PipeTransform {

  transform(input: Member[], filterByOfficer: string): Member[] {
    // We test input to defend against error due to
    // pipe being activated prior to input data being available
    if (input) {
      const output: Member[] = [];
      for (let i = 0; i < input.length; i++) {
        if (filterByOfficer === 'all') {
          output.push(input[i]);
        } else {
          if (input[i].clubOfficer) {
            output.push(input[i]);
          }
        }
      }
      return output;
    }
  }

}
