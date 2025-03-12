import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = <string>control.value;

    if (!valor) return null;
    if (valor.length === 0) return null;

    const primeraLetra = valor[0];

    //a !== A
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return {
        primeraLetraMayuscula: {
          mensaje: 'La primera letra debe ser mayuscula ',
        },
      };
    }

    return null;
  };
}


export function rechazarFechaFutura(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const fechaEscogida = new Date(control.value);
    const fechaActual = new Date();

    if(fechaEscogida > fechaActual){
      return{
        futuro: {
          mensaje: 'La fecha escogida no puede saer mayor a la actual'
        }
      }
    }

    return null;
  }
}
