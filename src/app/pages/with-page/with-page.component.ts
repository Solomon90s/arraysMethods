import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';

@Component({
  selector: 'app-with-page',
  imports: [JsonPipe, ButtonPreviousPageComponent],
  templateUrl: './with-page.component.html',
})
export default class WithPageComponent {
  private router: Router = inject(Router);

  public months: WritableSignal<string[]> = signal<string[]>([
    'January',
    'February',
    'March',
    'April',
  ]);

  arrayOriginal: string[] = [...this.months()];

  resultArray: string[] = this.months().with(0, 'Enero');

  public previousPage(): void {
    this.router.navigate(['toSpliced']);
  }
}
