import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-last-index-of-page',
  imports: [JsonPipe],
  templateUrl: './lastIndexOf-page.component.html',
})
export default class LastIndexOfPageComponent {
  fruits: WritableSignal<string[]> = signal<string[]>([
    'orange',
    'cherry',
    'apple',
    'strawberry',
  ]);

  resultArray: number = this.fruits().lastIndexOf('cherry');
}
