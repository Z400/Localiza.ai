import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importação dos módulos
import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/homepage/homepage.module').then(m => m.HomepageModule),  // Página inicial sem FullComponent
  },
  {
    path: '',
    component: FullComponent,  // Adiciona o FullComponent para rotas que precisam de layout
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path:'veiculo',
        loadChildren: () => import('./crudVeiculo/veiculo.module').then(m => m.VeiculoModule)
      }
     
    ]
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./component/novousuario/novousuario.module').then(m => m.NovousuarioModule)
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }