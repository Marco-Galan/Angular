import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import { GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGenerosComponent, MostrarErroresComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
})
export class CrearGenerosComponent {
  
  private router = inject(Router);
  private generoService = inject(GenerosService);
  errores: string[] = [];

  guardarCambios(genero: GeneroCreacionDTO) {
    this.generoService.crear(genero).subscribe({
      //next cuando la peticion es correcta
      next: () => {
        this.router.navigate(['/generos']);
      },
      // En caso de error
      error: (error) => {
        const errores = extraerErrores(error);
        this.errores = errores;
      }
    });   
  }
}
