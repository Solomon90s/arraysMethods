import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-of-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './indexOf-page.component.html',
})
export default class IndexOfPageComponent {
  private router: Router = inject(Router);

  names: WritableSignal<string[]> = signal<string[]>([
    'carlos',
    'tony',
    'cristian',
  ]);

  resultArray: number = this.names().indexOf('cristian');

  public nextPage(): void {
    this.router.navigate(['findIndex']);
  }

  public previousPage(): void {
    this.router.navigate(['reduce']);
  }
}
