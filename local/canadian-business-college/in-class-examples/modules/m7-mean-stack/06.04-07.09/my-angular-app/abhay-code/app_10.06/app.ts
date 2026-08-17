// app.ts
import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Column } from './column/column';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Column, Button],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal(' from the app ts file');

  ngOnInit(): void {
    // generic data type in the function using <T> place holder
    function my_func<T>(user_name: T): string {
      return 'test';
    }

    // defining data type when calling the function to replace placeholder
    let func_return = my_func<number>(123);
    console.log(func_return);

    // defining data type when calling the function to replace placeholder
    let func_return_2 = my_func<string>('hello');
    console.log(func_return_2);

    // defining data type when calling the function to replace placeholder
    let func_return_3 = my_func<boolean>(true);
    console.log(func_return_3);
  }
}
