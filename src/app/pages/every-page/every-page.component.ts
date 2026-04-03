import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-every-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './every-page.component.html',
})
export default class EveryPageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  isGreaterThanTwo: boolean = this.numbers().every(
    (element: number): boolean => element > 2,
  );

  public nextPage(): void {
    this.router.navigate(['concat']);
  }

  public previousPage(): void {
    this.router.navigate(['some']);
  }
}
