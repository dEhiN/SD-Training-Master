// users-list.ts

import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {
  http = inject(HttpClient);

  // create a variable with type array that can have any data structure inside it
  users: any[] = [];

  // ngOnInit helps to run something as the first item inside the component when used
  ngOnInit(): void {
    // call the get user function
    this.get_users();
  }

  // a function where the get request will be made
  get_users(): void {
    // make get request to the api to get the data
    this.http.get<any[]>('http://localhost:8000/get_angular_data').subscribe((response) => {
      console.log(response);
    });

    // make get request to the api to get the data
    // another way to call subscribe function - pass in an object with keys for next (what to do with response), error (what to do if an error occurs), and complete (what to do when complete or on cleanup)
    // this.http
    //   .get<any[]>('http://localhost:8000/get_angular_data')
    //   .subscribe({
    //     next: (response) => (this.users = response)
    //   });
  }
}
