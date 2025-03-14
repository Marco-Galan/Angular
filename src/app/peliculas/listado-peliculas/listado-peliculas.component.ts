import { DatePipe, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RatingComponent } from '../../compartidos/componentes/rating/rating.component';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent, MatCardModule, MatButtonModule, MatCardModule, MatIconModule, RatingComponent],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{

  @Input({required: true})
  peliculas!: any[];

  ngOnInit(): void {
    // Este método se ejecuta cuando el componente se inicializa
    setTimeout(()=>{
      // Aquí se puede agregar lógica que se ejecutará después de 2 segundos = 2000 milisegundos
    }, 2000);
  }

  agregarPelicula(){
    // Agrega una nueva película al arreglo de películas
    this.peliculas.push({
      titulo: 'Avatar',
      poster: '',
      fecha: new Date('2012-07-03'),
      precio: 200
    })
  }
  
  procesarVoto(voto: number){
    // Muestra una alerta con la calificación otorgada
    alert(`Calificacion otorgada: ${voto} estrellas`);
  }

  eliminarPelicula(pelicula: any){
    // Encuentra el índice de la película a eliminar en el arreglo de películas
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    // Elimina la película del arreglo usando el índice encontrado
    this.peliculas.splice(indice, 1);
  }

}