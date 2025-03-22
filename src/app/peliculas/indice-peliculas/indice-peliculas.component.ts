import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-peliculas',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-peliculas.component.html',
  styleUrl: './indice-peliculas.component.css'
})
export class IndicePeliculasComponent {

}
