// About.ts

import { Component } from '@angular/core';
import { MyForm } from '../../form/form';
import { UsersList } from '../../users-list/users-list';
// import router link to make the html navigation reload free
import { RouterLink } from '@angular/router';
import { Container } from '../../container/container';

@Component({
  selector: 'app-about',
  imports: [MyForm, UsersList, RouterLink, Container],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
