import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';

@Component({
  selector: 'app-find-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './find-page.component.html',
})
export default class FindPageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: number | undefined = this.numbers().find(
    (element: number): boolean => element > 3,
  );

  public nextPage(): void {
    this.router.navigate(['sort']);
  }

  public previousPage(): void {
    this.router.navigate(['forEach']);
  }
}
