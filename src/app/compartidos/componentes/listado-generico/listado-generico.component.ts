import { CurrencyPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-listado-generico',
  imports: [MatProgressSpinnerModule],
  templateUrl: './listado-generico.component.html',
  styleUrl: './listado-generico.component.css'
})
export class ListadoGenericoComponent {
  @Input({required: true})
  listado: any;

}
