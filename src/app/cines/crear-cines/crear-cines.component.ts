import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-cines',
  imports: [FormularioCinesComponent, MatButtonModule],
  templateUrl: './crear-cines.component.html',
  styleUrl: './crear-cines.component.css'
})

export class CrearCinesComponent {

  guardarCambios(cine: CineCreacionDTO){
    alert('Cine creado:' + cine.nombre + '\n' + 'Latitud: ' + cine.latitud + '\n' + 'Longitud: ' + cine.longitud);
    // console.log('Cine creado: ', cine);
  }

}
