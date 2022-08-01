import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.interface';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
//***********
private autores:Autor[]=[
  {
    id:1,
    nombre:'Stephen King',
    pais:'Estados Unidos',
    genero:'Thrillers, Novelas de Terror',
    year:1930,
    foto:'https://www.biografiasyvidas.com/biografia/k/fotos/king_stephen_2.jpg',
    libros:[
      {id:1,nombre:'The Shinning',year:1977},
      {id:2,nombre:'Pet Sematary',year:1981},
      {id:3,nombre:'Misery',year:1989},
      {id:4,nombre:'IT',year:1986}
    ]
},
];

//***********
  constructor() { }

  ListadoAutores():Autor[]{
    return this.autores;
  }

  InsertarAutor(autor:Autor){
    this.autores.push(autor);
  }

  ObtenerUno(id:number):Autor{
    
    return <Autor>this.autores.find(item=>item.id===id)

  }

}
