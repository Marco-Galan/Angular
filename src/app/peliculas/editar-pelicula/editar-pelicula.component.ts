import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Spiderman',
    fechaLanzamiento: new Date(2017-11-25),
    trailer: 'http://',
    poster: 'https://th.bing.com/th/id/R.1147780acfa7b62d896baf7c9429cb95?rik=UT7iHCk9Vy9JBA&pid=ImgRaw&r=0'
  }

    generosSeleccionados: SelectorMultipleDTO [] = [
      {llave: 1, valor: 'Drama'}
    ];
    generosNoSeleccionados: SelectorMultipleDTO [] = [
      {llave: 2, valor: 'Accción'},
      {llave: 3, valor: 'Comedia'}
    ];

    cinesSeleccionados: SelectorMultipleDTO [] = [
      {llave: 1, valor: 'México'}
    ];
    cinesNoSeleccionados: SelectorMultipleDTO [] = [
      {llave: 2, valor: 'Veracruz'},
      {llave: 3, valor: 'Oaxaca'}
    ];

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
    // alert('Pelicula editada: ' + pelicula.titulo + '\n Titulo: ' + pelicula.titulo + '\n Fecha de estreno: ' + pelicula.fechaLanzamiento);
  }

}
