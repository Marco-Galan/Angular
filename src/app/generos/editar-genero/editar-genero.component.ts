import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-editar-genero',
  imports: [],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {
  // Se obtiene id para editar
  @Input({transform: numberAttribute})
  id!: number;

}
