import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPreviousPageComponent } from "@components/button-previous-page/button-previous-page.component";
import { ButtonNextPageComponent } from "@components/button-next-page/button-next-page.component";

@Component({
  selector: 'app-sort-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './sort-page.component.html',
})
export default class SortPageComponent {
  private router: Router = inject(Router);

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  numbersCloned: number[] = [...this.numbers];

  alphabets: string[] = ['a', 'g', 'h', 'j', 'c', 'e'];

  alphabetsCloned: string[] = [...this.alphabets];

  descNumbers: number[] = this.numbersCloned.sort((a: number, b: number) =>
    b ? -1 : 1,
  );

  ascAlphabets: string[] = this.alphabetsCloned.sort();

  public nextPage(): void {
    this.router.navigate(['some']);
  }

  public previousPage(): void {
    this.router.navigate(['find']);
  }
}
