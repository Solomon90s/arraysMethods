import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-spliced-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './toSpliced-page.component.html',
})
export default class ToSplicedPageComponent {
  private router: Router = inject(Router);

  public numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  numbersOriginal: number[] = [...this.numbers()];

  resultArray: number[] = this.numbers().splice(1, 1);

  public nextPage(): void {
    this.router.navigate(['with']);
  }

  public previousPage(): void {
    this.router.navigate(['toSorted']);
  }
}
