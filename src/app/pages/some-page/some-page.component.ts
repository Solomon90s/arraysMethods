import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-some-page',
  imports: [JsonPipe],
  templateUrl: './some-page.component.html',
})
export default class SomePageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  isGreaterThanTwo: boolean = this.numbers().some(
    (element: number): boolean => element > 2,
  );
}
