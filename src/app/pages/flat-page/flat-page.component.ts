import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flat-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './flat-page.component.html',
})
export default class FlatPageComponent {
  private router: Router = inject(Router);

  public numbers: WritableSignal<(number | number[])[]> = signal<
    (number | number[])[]
  >([1, 2, 3, 4, 5, 6, 7, 8, [9, 10]]);

  numbersOriginal: (number | number[])[] = [...this.numbers()];

  resultArray: number[] = this.numbers().flat();

  public nextPage(): void {
    this.router.navigate(['isArray']);
  }

  public previousPage(): void {
    this.router.navigate(['lastIndexOf']);
  }
}
