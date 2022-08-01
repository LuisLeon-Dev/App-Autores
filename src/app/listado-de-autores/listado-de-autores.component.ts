import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor.interface';
import { AutorService } from '../services/autor-service.service';

@Component({
  selector: 'app-listado-de-autores',
  templateUrl: './listado-de-autores.component.html',
  styleUrls: ['./listado-de-autores.component.css']
})
export class ListadoDeAutoresComponent implements OnInit {

  titulo:string='Administración de autores'
  
  autores:Autor[]=[];


  constructor(private servicio:AutorService) { }

  ngOnInit(): void {

    this.autores=this.servicio.ListadoAutores();
  }

}
