import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reduce-page',
  imports: [JsonPipe],
  templateUrl: './reduce-page.component.html',
})
export default class ReducePageComponent {
  numbers = signal<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  numbersReduce = this.numbers().reduce(
    (Accumulator, current) => Accumulator + current,
  );
}
