import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-is-array-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './isArray-page.component.html',
})
export default class IsArrayPageComponent {
  private router: Router = inject(Router);

  public fruits: WritableSignal<string[]> = signal<string[]>([
    'apple',
    'orange',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];

  resultArray: boolean = Array.isArray(this.fruits());

  framework: WritableSignal<string> = signal<string>('Angular');

  newResultArray: boolean = Array.isArray(this.framework());

  public nextPage(): void {
    this.router.navigate(['from']);
  }

  public previousPage(): void {
    this.router.navigate(['flat']);
  }
}
