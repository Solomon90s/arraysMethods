import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-fill-page',
  imports: [JsonPipe],
  templateUrl: './fill-page.component.html',
})
export default class FillPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  numbersOriginal: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  fillWithTen: number[] = [...this.numbers().fill(10, 3)];
}
