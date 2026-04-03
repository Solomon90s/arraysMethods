import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from-page',
  imports: [
    JsonPipe,
    TitleCasePipe,
    ButtonPreviousPageComponent,
    ButtonNextPageComponent,
  ],
  templateUrl: './from-page.component.html',
})
export default class FromPageComponent {
  private router: Router = inject(Router);
  public framework: WritableSignal<string> = signal<string>('angular');
  resultArray: string[] = Array.from(this.framework());

  public nextPage(): void {
    this.router.navigate(['toReversed']);
  }

  public previousPage(): void {
    this.router.navigate(['isArray']);
  }
}
