import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actores',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

}
