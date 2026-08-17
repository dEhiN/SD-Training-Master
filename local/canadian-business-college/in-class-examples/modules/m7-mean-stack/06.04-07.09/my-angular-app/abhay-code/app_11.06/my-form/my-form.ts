// my-form.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-my-form',
  imports: [FormsModule],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css',
})
export class MyForm {

  user_name = "";
  user_age = 0;

}
