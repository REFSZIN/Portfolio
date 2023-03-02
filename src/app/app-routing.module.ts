import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forma } from './components/clientes/formulario/formulario.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
const routes: Routes = [
  { path: 'form', component: Forma },
  { path: '', component: AppComponent , pathMatch: 'full', 
    children: [
    { 
      path: 'form', 
      component: Forma
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule,HttpClientTestingModule]
})
export class AppRoutingModule { }
