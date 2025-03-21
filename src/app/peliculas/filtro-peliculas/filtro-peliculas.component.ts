import { Component, inject, numberAttribute, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPeliculas';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ListadoPeliculasComponent,
  ],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css',
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.leerValoresUrl(); 
    this.buscarPeliculas(this.form.value as FiltroPeliculas);

    this.form.valueChanges.subscribe(valores => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas);
      this.escribirParametrosBusqueda(valores as FiltroPeliculas);
    });
  }
  

  private formbuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  form = this.formbuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  });

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 3, nombre: 'Acción' },
    { id: 4, nombre: 'Comedia' },
  ];
  
  peliculasOriginal = [
    {
      titulo: 'Avatar',
      poster: 'img/avatar.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [1],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Alien',
      poster: 'img/alien.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [2],
      proximosEstrenos: true,
      enCines: false
    },
    {
      titulo: 'Avengers',
      poster: 'img/avengers.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [3],
      proximosEstrenos: true,
      enCines: false
    },
    {
      titulo: 'Batman',
      poster: 'img/batman.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [1],
      proximosEstrenos: true,
      enCines: false
    },
    {
      titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      genero: [5],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      genero: [4],
      proximosEstrenos: true,
      enCines: true
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      genero: [3],
      proximosEstrenos: false,
      enCines: false
    },
    {
      titulo: 'Reyes',
      poster: 'img/reyes.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [2],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Scream',
      poster: 'img/scream.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [1],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Shrek',
      poster: 'img/shrek.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [2],
      proximosEstrenos: false,
      enCines: false
    },
    {
      titulo: 'Us',
      poster: 'img/us.jpg',
      fecha: new Date(),
      precio: 200,
      genero: [3],
      proximosEstrenos: true,
      enCines: true
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
      genero: [4],
      proximosEstrenos: false,
      enCines: true
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
      genero: [5],
      proximosEstrenos: true,
      enCines: false
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
      genero: [4],
      proximosEstrenos: false,
      enCines: true
    },
  ];

  peliculas = this.peliculasOriginal;

  // Funciones

  leerValoresUrl(){

    this.activatedRoute.queryParams.subscribe((params: any) => {

      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number(params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);

    });

  }
  
  buscarPeliculas(valores: FiltroPeliculas) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.genero.indexOf(valores.generoId) !== -1);
    }

    if(valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    
    if(valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
 
  }

  limpiar(){
    this.form.patchValue({titulo: '', generoId: 0, proximosEstrenos: false, enCines: false});
  }

  escribirParametrosBusqueda(valores: FiltroPeliculas){
    let queryStrings = [];
    queryStrings.push(`titulo=${(encodeURIComponent(valores.titulo))}`);

    if(valores.generoId !== 0){
      queryStrings.push(`generoId=${valores.generoId}`);
    }

    if(valores.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${(valores.proximosEstrenos)}`);
    }

    if(valores.enCines){
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));

  }

}


