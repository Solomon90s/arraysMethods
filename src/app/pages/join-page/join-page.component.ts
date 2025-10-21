import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-join-page',
  imports: [JsonPipe],
  templateUrl: './join-page.component.html',
})
export default class JoinPageComponent {
  alphabets: WritableSignal<string[]> = signal<string[]>([
    'a',
    'b',
    'e',
    'v',
    'o',
    'd',
  ]);

  constructor() {
    console.log(
      `Resultado al unir los caracteres y separarlos con guión, ${this.alphabets().join('-')}`,
    );
    console.log(
      `Resultado al unir todos los caracteres. ${this.alphabets().join('')}`,
    );
  }
}
