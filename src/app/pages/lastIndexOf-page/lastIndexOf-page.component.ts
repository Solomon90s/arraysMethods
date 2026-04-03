import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-index-of-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './lastIndexOf-page.component.html',
})
export default class LastIndexOfPageComponent {
  private router: Router = inject(Router);

  public fruits: WritableSignal<string[]> = signal<string[]>([
    'orange',
    'cherry',
    'apple',
    'strawberry',
  ]);

  resultArray: number = this.fruits().lastIndexOf('cherry');

  public nextPage(): void {
    this.router.navigate(['flat']);
  }

  public previousPage(): void {
    this.router.navigate(['splice']);
  }
}
