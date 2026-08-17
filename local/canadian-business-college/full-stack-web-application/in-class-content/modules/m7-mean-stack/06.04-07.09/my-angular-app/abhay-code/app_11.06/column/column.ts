// Column.ts
// import input to make it avaiable
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  templateUrl: './column.html',
  styleUrl: './column.css'
})
export class Column {

  // create inputs for placeholder in the html
  heading_text = input("");
  para_text = input("");

}
