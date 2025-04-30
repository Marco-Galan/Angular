import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {

  generosService = inject(GenerosService)

  constructor() { 

    const generos = this.generosService.obtenerTodos().subscribe(generos => {
      console.log(generos);
    }); 
  }

}
