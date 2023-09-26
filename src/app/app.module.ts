import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CvGeneratorService } from './cv-generator.service';
import { FormsModule } from '@angular/forms'; 

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent }, // Configura la ruta para el componente FormularioComponent
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CvGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }











