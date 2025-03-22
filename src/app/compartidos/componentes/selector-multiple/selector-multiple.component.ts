import { Component, Input, Output } from '@angular/core';
import { SelectorMultipleDTO } from './SelectorMultipleModelo';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-selector-multiple',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {

@Input({required: true})
seleccionados!:  SelectorMultipleDTO[];

@Input({required: true})
noSeleccionados!: SelectorMultipleDTO[];

seleccionar(elemento: SelectorMultipleDTO, indice: number){
  this.seleccionados.push(elemento);
  this.noSeleccionados.splice(indice, 1);
}

noSelecionar(elemento: SelectorMultipleDTO, indice: number){
  this.seleccionados.push(elemento);
  this.noSeleccionados.splice(indice, 1);
}

seleccionarTodo(){
this.seleccionados.push(...this.noSeleccionados);
this.noSeleccionados.length = 0;
}

borrarTodo(){
  this.noSeleccionados.push(...this.seleccionados);
  this.seleccionados.length = 0;
}

}
