import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-unshift-page',
  imports: [JsonPipe],
  templateUrl: './unshift-page.component.html',
})
export default class UnshiftPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>([
    'pear',
    'banana',
    'strawberry',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];
  addingFruit: number[] = [this.fruits().unshift('cherry')];
}
