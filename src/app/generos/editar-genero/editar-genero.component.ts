import { Component, Input, numberAttribute } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  // Se obtiene id para editar
  @Input({transform: numberAttribute})
  id!: number;
  

  genero: GeneroDTO = {id: 1, nombre: 'Acción'};

  guardarCambios(genero: GeneroCreacionDTO){
    alert('Genero editado: ' + genero.nombre);
    // console.log('Editando el genero', genero);
  }

}
