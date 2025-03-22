import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO [] = [];
  generosNoSeleccionados: SelectorMultipleDTO [] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Accción'},
    {llave: 3, valor: 'Comedia'}
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO)
  {
    console.log(pelicula);
  // alert('Nueva pelicula creada: ' + pelicula.titulo + '\n Fecha: ' + pelicula.fechaLanzamiento + '\n Trailer:' + pelicula.trailer);
  }
}
