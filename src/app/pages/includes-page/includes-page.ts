import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-incudes-page',
  imports: [JsonPipe],
  templateUrl: './includes-page.html',
})
export default class IncudesPage {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  numberIncludes: number[] = [...this.numbers()];

  resultArray: boolean = this.numberIncludes.includes(9);
}
