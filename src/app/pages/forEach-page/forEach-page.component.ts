import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-for-each-page',
  imports: [JsonPipe],
  templateUrl: './forEach-page.component.html',
})
export default class ForEachPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>([
    'banana',
    'strawberry',
    'orange',
    'apple',
  ]);

  resultArray: void = this.fruits().forEach(
    (element: string, i: number): void => {
      console.log(`${element} se encuentra en el índice ${i}`);
    },
  );

  constructor() {
    console.log(`El tamaño del array es de ${this.fruits().length} elementos.`);
  }
}
