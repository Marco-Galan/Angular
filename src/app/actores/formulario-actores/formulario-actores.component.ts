import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment, { utc } from 'moment';
import { rechazarFechaFutura } from '../../compartidos/funciones/validaciones';
import { SelectorImagenComponent } from "../../compartidos/componentes/selector-imagen/selector-imagen.component";

@Component({
  selector: 'app-formulario-actores',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, SelectorImagenComponent],
  templateUrl: './formulario-actores.component.html',
  styleUrl: './formulario-actores.component.css'
})
export class FormularioActoresComponent implements OnInit{

  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo)
    }
  }

  private formbuilder = inject(FormBuilder);

  @Input() // Editar Actor
  modelo?: ActorDTO;

  @Output() //Guardar Actor
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null,{
      validators: [Validators.required, rechazarFechaFutura()]
    }),
    foto: new FormControl<File | string | null>(null)

  })


  obtenerErrorCampoNombre(){
    let campo = this.form.controls.nombre;

    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    return "";
  }


  obtenerErrorFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;
    
    if(campo.hasError('required')){
      return 'El campo fecha es requerido';
    }


    if( campo.hasError("futuro")){
      return campo.getError('futuro').mensaje;
    }

    return "";
  }

  guardarCambios(){
    if(!this.form.value){
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate(); //Conversion de moment a fecha string

    if(typeof actor.foto === "string"){
       actor.foto = undefined
    }
    this.posteoFormulario.emit(actor);
  }

  archivoSeleccionado(file: File){
    this.form.controls.foto.setValue(file);
  }
}
