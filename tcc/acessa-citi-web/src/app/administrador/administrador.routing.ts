import { Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';

import { CoordenadorComponent } from "./cadastrar/coordenador/coordenador.component";
import { ModeradorComponent } from "./cadastrar/moderador/moderador.component";
import { PrefeituraComponent } from "./cadastrar/prefeitura/prefeitura.component";
import { DashboardComponent } from './dashboard/dashboard.component';

export const AdministradorRoutes: Routes = [{  
    path: '',
    children: [
        { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
        { path: 'cadastrar-moderador', component: ModeradorComponent, canActivate: [AuthGuard] },
        { path: 'cadastrar-coordenador', component: CoordenadorComponent, canActivate: [AuthGuard] },
        { path: 'cadastrar-prefeitura', component: PrefeituraComponent,canActivate: [AuthGuard] }
    ]
}];