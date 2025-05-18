import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './components/contador/contador.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { HistorialComponent } from './components/historial/historial.component'

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaComponent,
    MensajeComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, CommonModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
