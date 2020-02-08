import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpinnerComponent } from './shared/spinner.component';
import { AprovarDenunciaComponent } from './dialogs/aprovar-denuncia/aprovar-denuncia.component';
import { DeferirDenunciaComponent } from './dialogs/deferir-denuncia/deferir-denuncia.component';
import { DetalhesDenunciaComponent } from './dialogs/detalhes-denuncia/detalhes-denuncia.component';
import { DetalhesPrefeituraComponent } from './dialogs/detalhes-prefeitura/detalhes-prefeitura.component';
import { DetalhesCoordenadorComponent } from './dialogs/detalhes-coordenador/detalhes-coordenador.component';
import { DetalhesModeradorComponent } from './dialogs/detalhes-moderador/detalhes-moderador.component';
import { DetalhesCidadaoComponent } from './dialogs/detalhes-cidadao/detalhes-cidadao.component';
import { HeaderComponent } from './layouts/administrador/header/header.component';
import { SidebarComponent } from './layouts/administrador/sidebar/sidebar.component';
import { AdministradorComponent } from './layouts/administrador/administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    AprovarDenunciaComponent,
    DeferirDenunciaComponent,
    DetalhesDenunciaComponent,
    DetalhesPrefeituraComponent,
    DetalhesCoordenadorComponent,
    DetalhesModeradorComponent,
    DetalhesCidadaoComponent,
    HeaderComponent,
    SidebarComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
