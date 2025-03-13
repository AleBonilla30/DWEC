import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
/* import { HttpClientModule } from '@angular/common/http'; */
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importar aquí
import { FormsModule } from '@angular/forms';
//importacion del toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* HttpClientModule, */
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',//notificacion al centro
      timeOut: 3000,
      closeButton: true, //boton para cerrarlo
      progressBar: true //progreso del tiempo
    }), // Configuración global de Toastr
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // Configurar HttpClient con fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
