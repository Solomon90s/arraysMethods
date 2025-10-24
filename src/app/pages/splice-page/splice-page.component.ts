import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-splice-page',
  imports: [JsonPipe],
  templateUrl: './splice-page.component.html',
})
export default class SplicePageComponent {
  tasks: string[] = ['Comprar leche', 'Llamar al médico', 'Estudiar Angular'];

  replaceTask(index: number): void {
    //! Inserta en la posición index sin eliminar nada
    this.tasks.splice(index, 1, 'Estudiar NestJS');
  }

  removeTask(index: number): void {
    //! Elimina 1 elemento en la posición 'index'
    this.tasks.splice(index, 1);
  }
}
