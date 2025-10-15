import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-sort-page',
  imports: [JsonPipe],
  templateUrl: './sort-page.component.html',
})
export default class SortPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  disorderedNumbers: WritableSignal<number[]> = signal<number[]>([
    1, 7, 3, 6, 8, 2, 5, 4,
  ]);

  alphabets: WritableSignal<string[]> = signal(['a', 'g', 'h', 'j', 'c', 'e']);

  disorderedAlphabets: WritableSignal<string[]> = signal([
    'a',
    'g',
    'h',
    'j',
    'c',
    'e',
  ]);

  descNumbers: number[] = this.numbers().sort((a: number, b: number) =>
    b ? -1 : 1,
  );

  ascAlphabets: string[] = this.alphabets().sort((a: string, b: string) =>
    a > b ? 1 : -1,
  );
}
