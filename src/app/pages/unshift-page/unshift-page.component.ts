import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unshift-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './unshift-page.component.html',
})
export default class UnshiftPageComponent {
  private router: Router = inject(Router);

  public fruits: WritableSignal<string[]> = signal<string[]>([
    'pear',
    'banana',
    'strawberry',
  ]);

  fruitsOriginal: string[] = [...this.fruits()];
  addingFruit: number[] = [this.fruits().unshift('cherry')];

  public nextPage(): void {
    this.router.navigate(['slice']);
  }

  public previousPage(): void {
    this.router.navigate(['shift']);
  }
}
