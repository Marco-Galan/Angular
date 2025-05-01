import {HttpParams} from '@angular/common/http';

export function constructorQueryParams(objeto: any): HttpParams {
  let queryParams = new HttpParams();

  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      queryParams = queryParams.append(propiedad, objeto[propiedad]);
    }
  }
  return queryParams;
}