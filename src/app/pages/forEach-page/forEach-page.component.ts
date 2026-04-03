import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';

@Component({
  selector: 'app-for-each-page',
  imports: [JsonPipe, ButtonNextPageComponent, ButtonPreviousPageComponent],
  templateUrl: './forEach-page.component.html',
})
export default class ForEachPageComponent {
  private router: Router = inject(Router);

  fruits: WritableSignal<string[]> = signal<string[]>([
    'banana',
    'strawberry',
    'orange',
    'apple',
  ]);

  resultArray: void = this.fruits().forEach(
    (element: string, i: number): void => {
      console.log(`${element} se encuentra en el índice ${i}`);
    },
  );

  constructor() {
    console.log(`El tamaño del array es de ${this.fruits().length} elementos.`);
  }

  public nextPage(): void {
    this.router.navigate(['find']);
  }

  public previousPage(): void {
    this.router.navigate(['filter']);
  }
}
