import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-push-page',
  imports: [JsonPipe],
  templateUrl: './push-page.component.html',
})
export default class PushPageComponent {
  games: WritableSignal<string[]> = signal<string[]>([
    'Silent Hill 2',
    'Metal Gear Solid',
    'Red Dead Redemption 2',
  ]);

  gamesCopy: string[] = [...this.games()];
  addingGame: number[] = [this.games().push('Jak and Daxter')];
}
