import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarDenunciaComponent } from './validar/validar-denuncia/validar-denuncia.component';
import { ConsultarDenunciaComponent } from './validar/consultar-denuncia/consultar-denuncia.component';
import { ConsultarUsuarioComponent } from './validar/consultar-usuario/consultar-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [ValidarDenunciaComponent, ConsultarDenunciaComponent, ConsultarUsuarioComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class ModeradorModule { }
