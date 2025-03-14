import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Función de validación para verificar que la primera letra sea mayúscula
export function primeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = <string>control.value;

    // Si el valor es nulo o vacío, no hay error
    if (!valor) return null;
    if (valor.length === 0) return null;

    const primeraLetra = valor[0];

    // Verifica si la primera letra no es mayúscula
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return {
        primeraLetraMayuscula: {
          mensaje: 'La primera letra debe ser mayúscula',
        },
      };
    }

    // Si la primera letra es mayúscula, no hay error
    return null;
  };
}

// Función de validación para rechazar fechas futuras
export function rechazarFechaFutura(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const fechaEscogida = new Date(control.value);
    const fechaActual = new Date();

    // Verifica si la fecha escogida es mayor a la fecha actual
    if (fechaEscogida > fechaActual) {
      return {
        futuro: {
          mensaje: 'La fecha escogida no puede ser mayor a la actual'
        }
      };
    }

    // Si la fecha escogida no es futura, no hay error
    return null;
  };
}