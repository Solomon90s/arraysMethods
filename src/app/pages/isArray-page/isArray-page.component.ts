import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-is-array-page',
  imports: [JsonPipe],
  templateUrl: './isArray-page.component.html',
})
export default class IsArrayPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>(['apple', 'orange']);

  fruitsOriginal: string[] = [...this.fruits()];

  resultArray: boolean = Array.isArray(this.fruits());

  framework: WritableSignal<string> = signal<string>('Angular');

  newResultArray: boolean = Array.isArray(this.framework());
}
