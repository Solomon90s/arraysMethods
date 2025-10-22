import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-shift-page',
  imports: [JsonPipe],
  templateUrl: './shift-page.component.html',
})
export default class ShiftPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>([
    'pear',
    'banana',
    'strawberry',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];
  elementDeleted: WritableSignal<(string | undefined)[]> = signal([
    this.fruits().shift(),
  ]);
}
