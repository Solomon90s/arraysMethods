import { JsonPipe } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonPreviousPageComponent } from "@components/button-previous-page/button-previous-page.component";
import { ButtonNextPageComponent } from "@components/button-next-page/button-next-page.component";

@Component({
  selector: 'app-join-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './join-page.component.html',
})
export default class JoinPageComponent {
  private router: Router = inject(Router);

  alphabets: WritableSignal<string[]> = signal<string[]>([
    'a',
    'b',
    'e',
    'v',
    'o',
    'd',
  ]);

  constructor() {
    console.log(
      `Resultado al unir los caracteres y separarlos con guión, ${this.alphabets().join('-')}`,
    );
    console.log(
      `Resultado al unir todos los caracteres. ${this.alphabets().join('')}`,
    );
  }

  public nextPage(): void {
    this.router.navigate(['reduce']);
  }

  public previousPage(): void {
    this.router.navigate(['includes']);
  }
}
