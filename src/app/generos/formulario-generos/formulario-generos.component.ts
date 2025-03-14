import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-formulario-generos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './formulario-generos.component.html',
  styleUrl: './formulario-generos.component.css',
})
export class FormularioGenerosComponent implements OnInit {
  ngOnInit(): void {
    // Verifica si el modelo no es nulo y actualiza el formulario con los valores del modelo
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: GeneroDTO; // Modelo de datos para el formulario
  
  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>(); // Evento que se emite al enviar el formulario

  private formbuilder = inject(FormBuilder); // Inyección del servicio FormBuilder

  // Definición del formulario con validaciones
  form = this.formbuilder.group({
    nombre: ['', {validators: [Validators.required, primeraLetraMayuscula()]}],
  })

  // Método para obtener el mensaje de error del campo nombre
  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }

  // Método para guardar los cambios y emitir el evento con los datos del formulario
  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}