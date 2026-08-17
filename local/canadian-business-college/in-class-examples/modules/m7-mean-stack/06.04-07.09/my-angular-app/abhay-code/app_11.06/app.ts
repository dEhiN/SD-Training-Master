// app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Column } from './column/column'
import {Button} from './button/button'
import {MyForm} from './my-form/my-form'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Column, Button, MyForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  protected readonly title = signal(' from the app ts file');

}
