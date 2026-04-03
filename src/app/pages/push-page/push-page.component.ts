import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-push-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './push-page.component.html',
})
export default class PushPageComponent {
  private router: Router = inject(Router);

  public games: WritableSignal<string[]> = signal<string[]>([
    'Silent Hill 2',
    'Metal Gear Solid',
    'Red Dead Redemption 2',
  ]);

  gamesCopy: string[] = [...this.games()];
  addingGame: number[] = [this.games().push('Jak and Daxter')];

  public nextPage(): void {
    this.router.navigate(['pop']);
  }

  public previousPage(): void {
    this.router.navigate(['fill']);
  }
}
