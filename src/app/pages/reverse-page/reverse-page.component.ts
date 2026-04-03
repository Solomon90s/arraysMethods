import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reverse-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './reverse-page.component.html',
})
export default class ReversePageComponent {
  private router: Router = inject(Router);

  public numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  numbersOriginal: number[] = [...this.numbers()];

  resultArray: number[] = this.numbers().reverse();

  public nextPage(): void {
    this.router.navigate(['splice']);
  }

  public previousPage(): void {
    this.router.navigate(['slice']);
  }
}
