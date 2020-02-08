import { Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';

import { ConsultarDenunciaComponent } from './validar/consultar-denuncia/consultar-denuncia.component';
import { ConsultarUsuarioComponent } from './validar/consultar-usuario/consultar-usuario.component';
import { ValidarDenunciaComponent } from './validar/validar-denuncia/validar-denuncia.component';
import { DashboardComponent } from '../administrador/dashboard/dashboard.component';

export const ModeradorRouting: Routes =[
    {
        path: '',
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'validar-denuncia', component: ValidarDenunciaComponent, canActivate: [AuthGuard] },
            { path: 'consultar-denuncia', component: ConsultarDenunciaComponent, canActivate: [AuthGuard] },
            { path: 'consultar-usuario', component: ConsultarUsuarioComponent, canActivate: [AuthGuard] }
        ]
    }
]