import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo:string='Clase 06 - Formularios'


  // Definir objeto formgroup

  miFormulario!: FormGroup;
  
  constructor() { 

    this.miFormulario = new FormGroup({

      'nombre': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required,Validators.email])

    })

  }

  ngOnInit(): void { }


  enviarDatos(){
    if(!this.miFormulario.valid){
      alert("El formulario tiene errores")
    }


 console.log(this.miFormulario.controls['nombre'].value)
    console.log(this.miFormulario.valid)
  }
}
