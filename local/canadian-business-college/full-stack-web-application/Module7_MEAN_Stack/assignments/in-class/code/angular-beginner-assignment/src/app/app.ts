import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DataForm } from './data-form/data-form';
import { DataList } from './data-list/data-list';

@Component({
  selector: 'app-root',
  imports: [DataForm, DataList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-beginner-assignment');
}
