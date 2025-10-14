import { Component } from '@angular/core';
import { TableComponent } from '@components/table/table.component';

@Component({
  selector: 'app-home-page',
  imports: [TableComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
