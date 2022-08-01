import { Libro } from "./libro.interface";

export interface Autor{

    id:number,
    nombre:string,
    pais:string,
    genero:string,
    year:number,
    foto:string,
    libros:Libro[]



}