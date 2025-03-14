import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

export const appConfig: ApplicationConfig = {
  // Se agrega withComponentInputBinding() para obtener id
  providers: [
    // Configura la detección de cambios en la zona con eventCoalescing habilitado
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Proporciona el enrutador con las rutas definidas y la vinculación de entrada del componente
    provideRouter(routes, withComponentInputBinding()),
    // Corrige el desborde al mostrar errores en los campos de formulario
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } },
    // Configuración del adaptador de fecha para el datepicker usando Moment.js
    provideMomentDateAdapter({
      parse: {
        dateInput: ['DD-MMMM-TYYY'] // Formato de entrada de fecha
      },
      display: {
        dateInput: 'DD-MMMM-YYYY', // Formato de visualización de fecha
        monthYearLabel: 'MMMM YYYY', // Etiqueta de mes y año
        dateA11yLabel: 'LL', // Etiqueta de accesibilidad para la fecha
        monthYearA11yLabel: 'MMMM YYYY' // Etiqueta de accesibilidad para mes y año
      }
    })
  ]
};