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
    setTimeout(()=>{
    }, 2000);


  }

  agregarPelicula(){
    this.peliculas.push({
      titulo: 'Avatar',
      poster: '',
      fecha: new Date('2012-07-03'),
      precio: 200
    })
  }
  
  procesarVoto(voto: number){
    alert(`Calificacion otorgada: ${voto} estrellas`);
  }

  eliminarPelicula(pelicula: any){
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
        this.peliculas.splice(indice, 1); // Eliminación de elemento según su arreglo   
  }

}
