import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './fill-page.component.html',
})
export default class FillPageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  numbersOriginal: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  fillWithTen: number[] = [...this.numbers().fill(10, 3)];

  public nextPage(): void {
    this.router.navigate(['push']);
  }

  public previousPage(): void {
    this.router.navigate(['findIndex']);
  }
}
