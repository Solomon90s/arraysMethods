import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { arrays } from '@data/arrays.data';
import { ArraysMethods } from '@interface/array-methods.interface';

@Component({
  selector: 'app-table',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './table.component.html',
})
export class TableComponent {
  methods: WritableSignal<ArraysMethods[]> = signal(arrays);
}
