import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reduce-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './reduce-page.component.html',
})
export default class ReducePageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  numbersReduce: number = this.numbers().reduce(
    (Accumulator: number, current: number): number => Accumulator + current,
  );

  public nextPage(): void {
    this.router.navigate(['indexOf']);
  }

  public previousPage(): void {
    this.router.navigate(['join']);
  }
}
