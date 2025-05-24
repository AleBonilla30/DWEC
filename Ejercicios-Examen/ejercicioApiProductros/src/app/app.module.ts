import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';
import { Filtros1Component } from './components/filtros1/filtros1.component';
import { Filtros2Component } from './components/filtros2/filtros2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    Filtros1Component,
    Filtros2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
