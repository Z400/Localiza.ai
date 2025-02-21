import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovousuarioRoutingModule } from './novousuario-routing.module';

import { NovoComponent } from './novo/novo.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NovoComponent
  ],
  imports: [
    CommonModule,
    NovousuarioRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NovousuarioModule { }
