// my-form.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-form',
  imports: [FormsModule],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css',
})
export class MyForm {

  // storing http client methods in the http variable
  http = inject(HttpClient);

  // class variable to store form data
  user_data = {
    user_name: "",
    user_age: 0,
    user_city: "",
    user_hobby: ""
  }

  form_submit_func(): void{
    console.log("Hello from submit");
    console.log(this.user_data);

    
    this.http.post("http://localhost:8000/angular_data", this.user_data).
    subscribe(response => {console.log("Data Sent")})
  }

}
