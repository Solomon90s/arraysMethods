import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-reverse-page',
  imports: [JsonPipe],
  templateUrl: './reverse-page.component.html',
})
export default class ReversePageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  numbersOriginal: number[] = [...this.numbers()];

  resultArray: number[] = this.numbers().reverse();
}
