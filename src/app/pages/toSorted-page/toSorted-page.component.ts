import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-sorted-page',
  imports: [JsonPipe],
  templateUrl: './toSorted-page.component.html',
})
export default class ToSortedPageComponent {
  numbers: number[] = [8, 3, 1, 5, 6, 4, 2, 7];

  numbersCloned: number[] = [...this.numbers];

  alphabets: string[] = ['a', 'b', 'h', 'j', 'c', 'e', 'd'];

  alphabetsCloned: string[] = [...this.alphabets];

  ascNumbers: number[] = this.numbersCloned.toSorted();

  descNumbers: number[] = this.numbersCloned.toSorted(function (
    a: number,
    b: number,
  ): number {
    return b - a;
  });

  ascAlphabets: string[] = this.alphabetsCloned.toSorted();
}
