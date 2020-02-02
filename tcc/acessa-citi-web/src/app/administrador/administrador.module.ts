import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PrefeituraComponent } from './cadastrar/prefeitura/prefeitura/prefeitura.component';
import { CoordenadorComponent } from './cadastrar/coordenador/coordenador.component';
import { ModeradorComponent } from './cadastrar/moderador/moderador.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [CadastrarComponent, PrefeituraComponent, CoordenadorComponent, ModeradorComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
