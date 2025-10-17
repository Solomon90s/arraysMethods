import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-every-page',
  imports: [JsonPipe],
  templateUrl: './every-page.component.html',
})
export default class EveryPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  isGreaterThanTwo: boolean = this.numbers().every(
    (element: number): boolean => element > 2,
  );
}
