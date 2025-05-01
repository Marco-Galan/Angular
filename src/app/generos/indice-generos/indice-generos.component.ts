import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../generos';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatTableModule } from '@angular/material/table';
import { environment } from '../../../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { HttpResponse } from '@angular/common/http';
import { paginacionDTO } from '../../compartidos/modelos/paginacionDTO';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule, RouterLink, ListadoGenericoComponent, MatTableModule, MatIconModule, MatPaginatorModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})

export class IndiceGenerosComponent {

  generosService = inject(GenerosService)
  generos!: GeneroDTO[];
  columnasMostrar = ['id', 'nombre', 'acciones'];
  paginacion: paginacionDTO = {pagina: 1, resultadosPorPagina: 5};
  totalRegistros!: number;

  constructor() { 
    this.cargarRegistros();
  }

  cargarRegistros(){
      this.generosService.obtenerPaginacion(this.paginacion).subscribe((respuesta: HttpResponse<GeneroDTO[]>) => {
      this.generos = respuesta.body as GeneroDTO[];
      const cabecera = respuesta.headers.get('totalRegistros') as string;
      this.totalRegistros = parseInt(cabecera, 10);
    });
  }
  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = {pagina: datos.pageIndex + 1, resultadosPorPagina: datos.pageSize};
    this.cargarRegistros();

  }

}
