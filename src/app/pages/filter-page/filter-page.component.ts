import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-filter-page',
  imports: [JsonPipe],
  templateUrl: './filter-page.component.html',
})
export default class FilterPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: (3 | 7)[] = this.numbers().filter(
    (element: number): element is 3 | 7 => element === 3 || element === 7,
  );
}
