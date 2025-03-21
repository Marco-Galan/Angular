import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { SelectorImagenComponent } from '../../compartidos/componentes/selector-imagen/selector-imagen.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';


@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,    
    MatDatepickerModule,
    SelectorImagenComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent  implements OnInit{
[x: string]: any;
  ngOnInit(): void {

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }

  }

  @Input()
  modelo?: PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    titulo: ['', {validators: [Validators,require]}],
    fechaLanazamiento: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl<File | string | null>(null, {validators: [Validators.required]})
  })

  archivoSeleccionado(File: File){
    this.form.controls.poster.setValue(File);
  }

  guardarCambios(){
    if (!this.form.valid){
      return;
    }

    const pelicula = this.form.value as PeliculaCreacionDTO;

    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    this.posteoFormulario.emit(pelicula);

  }

  obtenerErrorCampoTitulo(): string {

    let campo = this.form.controls.titulo;

    if( campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    return '';

  }

  obtenerErrorCampoFechaLanzamiento(){
    let campo = this.form.controls.fechaLanazamiento;

    if( campo.hasError('required')){
      return 'El campo fecha de lanzamiento es requerido';
    }

    return '';
  }


}
