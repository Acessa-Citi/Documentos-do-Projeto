import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorModule } from './administrador/administrador.module';

import { AdministradorComponent } from './layouts/administrador/administrador.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'administrador/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdministradorComponent,
    children: [{
      path: 'administrador',
      loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorModule )
    }]
  },
  {
    path: '',
    component: AdministradorComponent,
    children: [{
      path: 'coordenador',
      loadChildren: () => import('./coordenador/coordenador.module').then( m => m.CoordenadorModule )
    }]
  },
  {
    path: '',
    component: AdministradorComponent,
    children:[{
      path: 'moderador',
      loadChildren: () => import('./moderador/moderador.module').then( m => m.ModeradorModule )
    }]
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [{
      path: 'authentication',
      loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationModule )
    }]
  },
  {
    path: '**',
    redirectTo: 'administrador/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
