import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";

@Component({
  selector: 'app-editar-actores',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actores.component.html',
  styleUrl: './editar-actores.component.css'
})
export class EditarActoresComponent {
  @Input({transform: numberAttribute})
  id!: number;

  
  actor: ActorDTO = {
    // Ejemplo de datos
    id: 1, 
    nombre: 'Antonio', 
    fechaNacimiento: new Date('1991-01-25'), 
    foto:'https://c8.alamy.com/compes/f762xe/poster-de-pelicula-de-cine-de-titanic-f762xe.jpg'
  }

  guardarCambios(actor: ActorCreacionDTO){
    console.log('Editando actor', actor);
  }

}
