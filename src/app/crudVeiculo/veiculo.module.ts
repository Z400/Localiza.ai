import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculoRoutingModule } from './veiculo-routing.module';
  import { EditarComponent } from './editar/editar.component';
import { RemoverComponent } from './remover/remover.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    CadastrarComponent,
    EditarComponent,
    RemoverComponent
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
