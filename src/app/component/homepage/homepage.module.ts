import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { PageComponent } from './page/page.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ]
})
export class HomepageModule { }
