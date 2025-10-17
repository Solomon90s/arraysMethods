import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-page',
  imports: [JsonPipe],
  templateUrl: './sort-page.component.html',
})
export default class SortPageComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  numbersCloned: number[] = [...this.numbers];

  alphabets: string[] = ['a', 'g', 'h', 'j', 'c', 'e'];

  alphabetsCloned: string[] = [...this.alphabets];

  descNumbers: number[] = this.numbersCloned.sort((a: number, b: number) =>
    b ? -1 : 1,
  );

  ascAlphabets: string[] = this.alphabetsCloned.sort((a: string, b: string) =>
    a > b ? 1 : -1,
  );
}
