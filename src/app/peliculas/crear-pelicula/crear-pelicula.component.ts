import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  guardarCambios(pelicula: PeliculaCreacionDTO)
  {
  alert('Nueva pelicula creada: ' + pelicula.titulo + '\n Fecha: ' + pelicula.fechaLanzamiento + '\n Trailer:' + pelicula.trailer);
  }
}
