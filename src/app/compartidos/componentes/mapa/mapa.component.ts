import { Component, EventEmitter, Output } from '@angular/core';
import { icon, latLng, LeafletEvent, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import{LeafletModule} from '@bluehalo/ngx-leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent {

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markeOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }
  
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(19.4326, -99.1332),
  };

  capas: Marker<any>[] = [];
 

  manejarClick(event: LeafletMouseEvent) {
    
    this.capas = [];

    const latitud = event.latlng.lat;
    const lognitud = event.latlng.lng;

    this.capas.push(marker([event.latlng.lat, event.latlng.lng]));
    this.coordenadaSeleccionada.emit({latitud, lognitud})
  }
}
