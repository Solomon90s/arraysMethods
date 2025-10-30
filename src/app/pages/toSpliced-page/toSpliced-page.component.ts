import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-to-spliced-page',
  imports: [JsonPipe],
  templateUrl: './toSpliced-page.component.html',
})
export default class ToSplicedPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  numbersOriginal: number[] = [...this.numbers()];

  resultArray: number[] = this.numbers().splice(1, 1);
}
