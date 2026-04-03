import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';

@Component({
  selector: 'app-incudes-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './includes-page.html',
})
export default class IncudesPage {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  numberIncludes: number[] = [...this.numbers()];

  resultArray: boolean = this.numberIncludes.includes(9);

  public nextPage(): void {
    this.router.navigate(['join']);
  }

  public previousPage(): void {
    this.router.navigate(['concat']);
  }
}
