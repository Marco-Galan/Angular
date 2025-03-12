import { CurrencyPipe, DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from './compartidos/componentes/menu/menu.component';
import { RatingComponent } from './compartidos/componentes/rating/rating.component';
import { MatButtonModule } from '@angular/material/button';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { FooterComponent } from "./compartidos/footer/footer.component";


@Component({
  selector: 'app-root',
  // Imports: Se agergan los componentes a utilizar en index
  imports: [MenuComponent, MatButtonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Angular Peliculas';

}
