import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-flat-page',
  imports: [JsonPipe],
  templateUrl: './flat-page.component.html',
})
export default class FlatPageComponent {
  numbers: WritableSignal<(number | number[])[]> = signal<
    (number | number[])[]
  >([1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]);

  numbersOriginal: (number | number[])[] = [...this.numbers()];

  resultArray: number[] = this.numbers().flat();
}
