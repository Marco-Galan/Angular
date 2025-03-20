import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styleUrl: './editar-cines.component.css'
})
export class EditarCinesComponent {

  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = {id: 1, nombre: 'Orizaba', latitud: 18.84842672876843, longitud: -97.10542238112869};
  
  guardarCambios(cine: CineCreacionDTO){
    alert('Cine editado: ' + cine.nombre + '\n' + 'Latitud: ' + cine.latitud + '\n' + 'Longitud: ' + cine.longitud);
    // console.log('Editar cine: ', cine);
  }
  
}
