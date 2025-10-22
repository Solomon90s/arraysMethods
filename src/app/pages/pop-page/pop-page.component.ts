import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-pop-page',
  imports: [JsonPipe],
  templateUrl: './pop-page.component.html',
})
export default class PopPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>([
    'pear',
    'banana',
    'strawberry',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];

  constructor() {
    this.fruits().pop();
  }
}
