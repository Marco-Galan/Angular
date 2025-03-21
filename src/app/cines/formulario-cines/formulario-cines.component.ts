import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO } from '../cines';
import { MapaComponent } from "../../compartidos/componentes/mapa/mapa.component";
import { Coordenada } from '../../compartidos/componentes/mapa/coordenada';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulario-cines',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MapaComponent,
    MatButtonModule,
  ],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css',
})
export class FormularioCinesComponent implements OnInit {

  // Método del ciclo de vida que se ejecuta al inicializar el componente
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      // Si el modelo está definido, inicializa el formulario con sus valores
      this.form.patchValue(this.modelo);
      // Agrega las coordenadas iniciales al array
      this.coordenadasIniciales.push({latitud: this.modelo.latitud, lognitud: this.modelo.longitud});
    }
  }

  // Propiedad de entrada que recibe datos del modelo
  @Input()
  modelo?: CineCreacionDTO;

  // Propiedad de salida que emite un evento cuando se envía el formulario
  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  // Array para almacenar las coordenadas iniciales
  coordenadasIniciales: Coordenada[] = [];

  // Inyección del servicio FormBuilder
  private formbuilder = inject(FormBuilder);

  // Definición del formulario reactivo
  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    latitud: new FormControl<number | null>(null, [Validators.required]),
    longitud: new FormControl<number | null>(null, [Validators.required])
  })

  // Método para obtener el mensaje de error del campo nombre
  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }

    return "";
  }

  // Método que se ejecuta cuando se selecciona una coordenada en el mapa
  coordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }

  // Método que se ejecuta al enviar el formulario
  guardarCambios(){
    if (!this.form.valid){
      return;
    }
    const cine = this.form.value as CineCreacionDTO;
    this.posteoFormulario.emit(cine);
    // alert('Cine creado:' + this.form.value.nombre + '\n' + 'Latitud: ' + this.form.value.latitud + '\n' + 'Longitud: ' + this.form.value.longitud);
  }
}