import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { FormsModule } from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartasLibroComponent } from './components/cartas-libro/cartas-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    CartasLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
