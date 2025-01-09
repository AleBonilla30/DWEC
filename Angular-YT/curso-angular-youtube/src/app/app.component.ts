import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alejandra Bonilla';
  subtitle = 'Es la persona que esta logueada';
}
