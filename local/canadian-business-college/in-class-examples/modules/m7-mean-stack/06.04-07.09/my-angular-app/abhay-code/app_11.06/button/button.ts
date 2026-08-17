// Button.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

  button_text = input("")

  // a function that takes Event as a parameter
  on_click(my_event: Event): void{
    console.log(my_event);
  }

}
