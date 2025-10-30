import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-with-page',
  imports: [JsonPipe],
  templateUrl: './with-page.component.html',
})
export default class WithPageComponent {
  months: WritableSignal<string[]> = signal<string[]>([
    'January',
    'February',
    'March',
    'April',
  ]);

  arrayOriginal: string[] = [...this.months()];

  resultArray: string[] = this.months().with(0, 'Enero');
}
