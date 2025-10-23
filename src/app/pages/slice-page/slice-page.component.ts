import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-slice-page',
  imports: [JsonPipe],
  templateUrl: './slice-page.component.html',
})
export default class SlicePageComponent {
  alphabets: WritableSignal<string[]> = signal<string[]>([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]);
  resultArray: string[][] = [this.alphabets().slice(2, 4)];
}
