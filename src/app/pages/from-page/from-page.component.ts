import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-from-page',
  imports: [JsonPipe, TitleCasePipe],
  templateUrl: './from-page.component.html',
})
export default class FromPageComponent {
  framework: WritableSignal<string> = signal<string>('angular');
  resultArray: string[] = Array.from(this.framework());
}
