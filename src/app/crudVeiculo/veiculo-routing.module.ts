import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { RemoverComponent } from './remover/remover.component';

const routes: Routes = [

{
  path:'cadastrar',
  component: CadastrarComponent
},
{
  path:'editar',
  component: EditarComponent
},
{
  path:'remover',
  component: RemoverComponent 
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule { }
