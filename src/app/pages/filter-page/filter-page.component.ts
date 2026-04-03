import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';

@Component({
  selector: 'app-filter-page',
  imports: [JsonPipe, ButtonNextPageComponent, ButtonPreviousPageComponent],
  templateUrl: './filter-page.component.html',
})
export default class FilterPageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: (3 | 7)[] = this.numbers().filter(
    (element: number): element is 3 | 7 => element === 3 || element === 7,
  );

  public nextPage(): void {
    this.router.navigate(['forEach']);
  }

  public previousPage(): void {
    this.router.navigate(['map']);
  }
}
