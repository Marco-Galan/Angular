import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletEvent, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit{

  ngOnInit(): void {
    
    this.capas = this.coordenadasIniciales.map(valor => {
    const marcador = marker([valor.latitud, valor.lognitud], this.markerOptions);

    return marcador;
    });

  }

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'asset/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
  
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution: '...',
      })
    ],
    zoom: 14,
    center: latLng(18.88530701269189, -96.93525697147352)
  };

  capas: Marker<any>[] = [];
 

  manejarClick(event: LeafletMouseEvent) {
        
    const latitud = event.latlng.lat;
    const lognitud = event.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitud, lognitud], this.markerOptions));    
    
    this.coordenadaSeleccionada.emit({latitud, lognitud});
  }
}
