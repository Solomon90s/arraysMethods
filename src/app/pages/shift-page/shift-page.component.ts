import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shift-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './shift-page.component.html',
})
export default class ShiftPageComponent {
  private router: Router = inject(Router);

  public fruits: WritableSignal<string[]> = signal<string[]>([
    'pear',
    'banana',
    'strawberry',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];
  elementDeleted: WritableSignal<(string | undefined)[]> = signal([
    this.fruits().shift(),
  ]);

  public nextPage(): void {
    this.router.navigate(['unshift']);
  }

  public previousPage(): void {
    this.router.navigate(['pop']);
  }
}
