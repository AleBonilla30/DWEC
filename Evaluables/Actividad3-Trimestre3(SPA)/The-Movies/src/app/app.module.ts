import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { MoviesPosterComponent } from './components/movies-poster/movies-poster.component';
import { PosterPipe } from './pipes/poster.pipe';
import { CastComponent } from './components/cast/cast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterComponent,
    PosterPipe,
    CastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CommonModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
