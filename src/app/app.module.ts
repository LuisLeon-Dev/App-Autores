import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoDeAutoresComponent } from './listado-de-autores/listado-de-autores.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { AutorModule } from './autor/autor.module';

@NgModule({
  declarations: [
    AppComponent,
    ListadoDeAutoresComponent,
    NavBarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
