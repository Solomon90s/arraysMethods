import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-map-page',
  imports: [JsonPipe],
  templateUrl: './map-page.component.html',
})
export class MapPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: number[] = this.numbers().map(
    (element: number): number => element + 1,
  );

  constructor() {
    console.log('array modificado', this.resultArray);
  }
}
