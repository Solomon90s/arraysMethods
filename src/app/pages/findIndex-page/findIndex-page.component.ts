import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-index-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './findIndex-page.component.html',
})
export default class FindIndexPageComponent {
  private router: Router = inject(Router);

  names: WritableSignal<string[]> = signal<string[]>([
    'carlos',
    'tony',
    'cristian',
  ]);

  resultArray: number = this.names().findIndex(
    (element: string) => element === 'tony',
  );

  public nextPage(): void {
    this.router.navigate(['fill']);
  }

  public previousPage(): void {
    this.router.navigate(['indexOf']);
  }
}
