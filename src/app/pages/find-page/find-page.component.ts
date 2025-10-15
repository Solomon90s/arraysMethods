import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-find-page',
  imports: [JsonPipe],
  templateUrl: './find-page.component.html',
})
export default class FindPageComponent {
  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: number | undefined = this.numbers().find(
    (element: number): boolean => element > 3,
  );
}
