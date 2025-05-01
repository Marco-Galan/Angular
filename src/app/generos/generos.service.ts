import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GeneroCreacionDTO, GeneroDTO } from './generos';
import { paginacionDTO } from '../compartidos/modelos/paginacionDTO';
import { constructorQueryParams } from '../compartidos/funciones/constructorQueryParams';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient);
  
  private urlBase = environment.apiUrl + '/generos';

  constructor() { }

  public obtenerPaginacion(paginacion: paginacionDTO): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = constructorQueryParams(paginacion);
    return this.http.get<GeneroDTO[]>(this.urlBase, { params: queryParams, observe: 'response' });
  }

  public crear(genero: GeneroCreacionDTO){
    return this.http.post(this.urlBase, genero);
  }
}
