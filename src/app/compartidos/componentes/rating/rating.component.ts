import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit {
  [x: string]: any;

  ngOnInit(): void {
    // this.maximoRatingArreglo = Array(this.maximoRating).fill(0);
  }

  @Input({ required: true, transform: (valor: number)=> Array(valor).fill(0) })
  maximoRating!: number[];

  @Input()
  ratingSelecionado = 0;
  ratingAnterior = 0;

  @Output()
  votado = new EventEmitter<number>();
  // maximoRatingArreglo: any[] = [];

  manejarMouseneter(indice: number) {
    this.ratingSelecionado = indice + 1;
  }

  manejarMouseLeave() {
    if (this.ratingAnterior !== 0) {
      this.ratingSelecionado = this.ratingAnterior;
    } else {
      this.ratingSelecionado = 0;
    }
  }

  manejarClick(indice: number) {
    this.ratingSelecionado = indice + 1;
    this.ratingAnterior = this.ratingSelecionado;
    this.votado.emit(this.ratingSelecionado);
  }
}
