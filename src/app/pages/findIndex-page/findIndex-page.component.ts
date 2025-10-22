import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-find-index-page',
  imports: [JsonPipe],
  templateUrl: './findIndex-page.component.html',
})
export default class FindIndexPageComponent {
  names: WritableSignal<string[]> = signal<string[]>([
    'carlos',
    'tony',
    'cristian',
  ]);

  resultArray: number = this.names().findIndex((element) => element === 'tony');
}
