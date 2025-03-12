import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  // Se agrega withComponentInputBinding() para obtener id
  
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()),
    // Corrige desborde al mostrar errores
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:{subscriptSizing: 'dynamic'}}
  ]
};
