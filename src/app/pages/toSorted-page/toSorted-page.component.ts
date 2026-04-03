import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-sorted-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './toSorted-page.component.html',
})
export default class ToSortedPageComponent {
  private router: Router = inject(Router);

  public numbers: number[] = [8, 3, 1, 5, 6, 4, 2, 7];

  numbersCloned: number[] = [...this.numbers];

  public alphabets: string[] = ['a', 'b', 'h', 'j', 'c', 'e', 'd'];

  alphabetsCloned: string[] = [...this.alphabets];

  ascNumbers: number[] = this.numbersCloned.toSorted();

  descNumbers: number[] = this.numbersCloned.toSorted(function (
    a: number,
    b: number,
  ): number {
    return b - a;
  });

  ascAlphabets: string[] = this.alphabetsCloned.toSorted();

  public nextPage(): void {
    this.router.navigate(['toSpliced']);
  }

  public previousPage(): void {
    this.router.navigate(['toReversed']);
  }
}
