import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-index-of-page',
  imports: [JsonPipe],
  templateUrl: './indexOf-page.component.html',
})
export default class IndexOfPageComponent {
  names: WritableSignal<string[]> = signal<string[]>([
    'carlos',
    'tony',
    'cristian',
  ]);

  resultArray: number = this.names().indexOf('cristian');
}
