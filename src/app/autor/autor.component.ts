import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Autor } from '../models/autor.interface';
import { AutorService } from '../services/autor-service.service';
  

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {


  id = 0;
  autor!:Autor;

  //http://localhost:4000/autor/1

  paramsSubscription: Subscription = new Subscription;
  
  constructor(private route: ActivatedRoute,private servicio:AutorService) { }
  
  
  ngOnInit(): void {

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });


    this.autor=this.servicio.ObtenerUno(this.id);

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}