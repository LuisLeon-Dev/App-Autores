import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../models/libro.interface';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  foto='https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000';
  
  @Input() libro!:Libro;
  
  constructor() { }

  ngOnInit(): void {
  }

}
