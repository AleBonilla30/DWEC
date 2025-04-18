import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  autor = 'Alejandra Gonzalez';
  asignatura = 'Desarrollo web entorno cliente';

  tareas: string[] = []
  nuevaTarea: string = ""

  agregarTareas(){
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea)
      this.nuevaTarea = ""
    }
  }

  eliminarTarea(index: number){
    this.tareas.splice(index, 1)
  }
}
