import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year: WritableSignal<number> = signal(new Date().getFullYear());
}
