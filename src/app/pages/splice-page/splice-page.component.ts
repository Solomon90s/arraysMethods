import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonPreviousPageComponent } from '@components/button-previous-page/button-previous-page.component';
import { ButtonNextPageComponent } from '@components/button-next-page/button-next-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splice-page',
  imports: [JsonPipe, ButtonPreviousPageComponent, ButtonNextPageComponent],
  templateUrl: './splice-page.component.html',
})
export default class SplicePageComponent {
  private router: Router = inject(Router);

  public tasks: string[] = [
    'Comprar leche',
    'Llamar al médico',
    'Estudiar Angular',
  ];

  replaceTask(index: number): void {
    //! Inserta en la posición index sin eliminar nada
    this.tasks.splice(index, 1, 'Estudiar NestJS');
  }

  removeTask(index: number): void {
    //! Elimina 1 elemento en la posición 'index'
    this.tasks.splice(index, 1);
  }

  public nextPage(): void {
    this.router.navigate(['lastIndexOf']);
  }

  public previousPage(): void {
    this.router.navigate(['reverse']);
  }
}
