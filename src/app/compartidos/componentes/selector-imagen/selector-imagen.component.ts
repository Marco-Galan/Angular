import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../funciones/toBase64';

@Component({
  selector: 'app-selector-imagen',
  imports: [MatButtonModule],
  templateUrl: './selector-imagen.component.html',
  styleUrl: './selector-imagen.component.css',
})
export class SelectorImagenComponent {
  @Input({ required: true })
  titulo!: string;

  @Input()
  urlImagenActual?: string;

  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  //convertir imagen a base 64
  imagenBase64?: string;

  conversionB64(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      // Pasamos archivo
      toBase64(file).then((valor: string) => (this.imagenBase64 = valor))
      // Catch en caso de error
      .catch((error) => console.log(error));

      this.archivoSeleccionado.emit(file);
      // Elimina la url guardada
      this.urlImagenActual = undefined;
    }
  }
}


