import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GeneroDTO } from './generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private http = inject(HttpClient);
  private urlBase = environment.apiUrl + '/generos';

  constructor() { }

  public obtenerTodos(): Observable<GeneroDTO[]> {

    return this.http.get<GeneroDTO[]>(this.urlBase);
  }
}
