import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slice-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './slice-page.component.html',
})
export default class SlicePageComponent {
  private router: Router = inject(Router);

  public alphabets: WritableSignal<string[]> = signal<string[]>([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]);
  resultArray: string[][] = [this.alphabets().slice(2, 4)];

  public nextPage(): void {
    this.router.navigate(['reverse']);
  }

  public previousPage(): void {
    this.router.navigate(['unshift']);
  }
}
