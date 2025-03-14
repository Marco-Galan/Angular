import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-lading-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.css'
})
export class LadingPageComponent implements OnInit {

  ngOnInit(): void {
    // Este método se ejecuta cuando el componente se inicializa
    setTimeout(()=>{
      // Inicializa el arreglo de películas en cines después de 2 segundos
      this.peliculasCines = [{
        titulo: 'Avatar',
        poster: 'img/avatar.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Alien',
        poster: 'img/alien.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Avengers',
        poster: 'img/avengers.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Batman',
        poster: 'img/batman.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Inside Out 2',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
      },
      {
        titulo: 'Moana 2',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      },
      {
        titulo: 'Bad Boys: Ride or Die',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      }];

      // Inicializa el arreglo de películas de estrenos después de 2 segundos
      this.peliculasEstrenos = [
      {
        titulo: 'Reyes',
        poster: 'img/reyes.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Scream',
        poster: 'img/scream.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Shrek',
        poster: 'img/shrek.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Us',
        poster: 'img/us.jpg',
        fecha: new Date(),
        precio: 200
      },
      {
        titulo: 'Deadpool & Wolverine',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
      },
      {
        titulo: 'Oppenheimer',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
      },
      {
        titulo: 'The Flash',
        fechaLanzamiento: new Date('2016-05-03'),
        precio: 300.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
      }
      ]
    }, 2000);
  }

  // Arreglo para almacenar las películas en cines
  peliculasCines!: any[];
  
  // Arreglo para almacenar las películas de estrenos
  peliculasEstrenos!: any[];
}