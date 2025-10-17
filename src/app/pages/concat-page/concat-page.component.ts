import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-concat-page',
  imports: [JsonPipe],
  templateUrl: './concat-page.component.html',
})
export default class ConcatPageComponent {
  firstNumbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  secondNumbers: WritableSignal<number[]> = signal<number[]>([
    9, 10, 11, 12, 13,
  ]);

  resultArray: number[] = this.firstNumbers().concat(this.secondNumbers());
}
