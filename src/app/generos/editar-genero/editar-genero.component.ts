import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';
import { FormularioGenerosComponent } from "../formulario-generos/formulario-generos.component";
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { Router } from '@angular/router';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";

@Component({
  selector: 'app-editar-genero',
  imports: [FormularioGenerosComponent, MostrarErroresComponent, CargandoComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent implements OnInit{
  ngOnInit(): void {
    this.generosService.obtenerPorId(this.id).subscribe(genero=>{
      this.genero = genero;
    })
  }

  // Se obtiene id para editar
  @Input({transform: numberAttribute})
  id!: number;
  genero?: GeneroDTO;
  generosService = inject(GenerosService);
  errores: string[] = []; 
  router = inject(Router);

  guardarCambios(genero: GeneroCreacionDTO){
    this.generosService.actualizar(this.id, genero).subscribe({
      next: () =>{
        this.router.navigate(['/generos']);
      },
      error: err =>{
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    })
  }

}
