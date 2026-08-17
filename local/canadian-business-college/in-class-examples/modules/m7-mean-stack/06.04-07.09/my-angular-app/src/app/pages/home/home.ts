// home.ts

import { Component } from '@angular/core';
import { Button } from '../../button/button';
import { Column } from '../../column/column';
// import router link to make the html navigation reload free
import { RouterLink } from '@angular/router';
import { Container } from '../../container/container';

@Component({
  selector: 'app-home',
  imports: [Button, Column, RouterLink, Container],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
