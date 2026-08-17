// Container.ts

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  classname = input('');
}
