import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concat-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './concat-page.component.html',
})
export default class ConcatPageComponent {
  private router: Router = inject(Router);
  firstNumbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  secondNumbers: WritableSignal<number[]> = signal<number[]>([
    9, 10, 11, 12, 13,
  ]);

  resultArray: number[] = this.firstNumbers().concat(this.secondNumbers());

  public nextPage(): void {
    this.router.navigate(['includes']);
  }

  public previousPage(): void {
    this.router.navigate(['every']);
  }
}
