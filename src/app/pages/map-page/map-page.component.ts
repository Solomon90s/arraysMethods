import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNextPageComponent } from "@components/button-next-page/button-next-page.component";

@Component({
  selector: 'app-map-page',
  imports: [JsonPipe, ButtonNextPageComponent],
  templateUrl: './map-page.component.html',
})
export default class MapPageComponent {
  private router: Router = inject(Router);

  numbers: WritableSignal<number[]> = signal<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  resultArray: number[] = this.numbers().map(
    (element: number): number => element + 1,
  );

  constructor() {
    console.log('array modificado', this.resultArray);
  }

  public nextPage(): void {
    this.router.navigateByUrl('/filter');
  }
}
