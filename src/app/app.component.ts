import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { TableComponent } from '@components/table/table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'arraysMethods';
}
