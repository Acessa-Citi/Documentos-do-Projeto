import { Injectable } from '@angular/core';

export interface BadgeItem {
    type: string;
    value: string;
  }
  export interface Saperator {
    name: string;
    type?: string;
  }
  export interface SubChildren {
    state: string;
    name: string;
    type?: string;
  }
  export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    child?: SubChildren[];
    markItem?: boolean;
  }
  
  export interface Menu {
    subState?: string;
    state: string;
    name: string;
    type: string;
    icon?: string;
    badge?: BadgeItem[];
    saperator?: Saperator[];
    children?: ChildrenItems[];
  }

const administradorMenu = [
    {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'link'
    },
    {
        state: '',
        name: 'CADASTRAR',
        type: 'sub',
        children: [
            { state: 'listar-cadastrar-moderadores', name: 'Moderadores e Coordenadores', type: 'link' },
            { state: 'listar-cadastrar-prefeitura', name: 'Prefeituras e Orgãos Copetentes', type: 'link' }
        ]
    }
];

const ModeradorMenu = [
    {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'link'
    },
    {
        state: '',
        name: 'AVALIAR',
        type: 'sub',
        children: [
            { state: 'listar-denuncia-pendentes', name: 'Denúncias Pendentes de Aprovação', type: 'link' },
            { state: 'listar-feedback-denuncia', name: 'Feedback das Denúncias', type: 'link' }
        ]
    }
];

const CoordenadorMenu = [
    {
        state: 'dashboard',
        name: 'DASHBOARD',
        type: 'link'
    },
    {
        state: '',
        name: 'APROVAR',
        type: 'sub',
        children: [
            { state: 'listar-denuncia-filtrada', name: 'Denúncias Filtradas para Deferimento/Indeferimento', type: 'link' }
        ]
    }
];

@Injectable()
export class ItemsMenu {
  private _itensMenuAdministrador: Menu[];
  public get itensMenuAdiministrador() { return this._itensMenuAdministrador; }
  private _itensMenuModerador: Menu[];
  public get itensMenuModerador() { return this._itensMenuModerador; }
  private _itensMenuCoordenador: Menu[];
  public get itensMenuCoordenador() { return this._itensMenuCoordenador; }

  constructor() {
    // Realiza um clone da referencia dos objetos de menus completos.
    this.resetMenus();
  }

  getMenuitem() { }

  getAdminMenuItems(accessType: string): Menu[] {
    if (accessType === 'administrador') {
      return this.itensMenuAdiministrador;
    } else if (accessType === 'moderador') {
      return this.itensMenuModerador;
    } else if (accessType === 'coordenador') {
      return this.itensMenuCoordenador;
    }
  }

  resetMenus() {
    this._itensMenuAdministrador = Object.assign([], administradorMenu);
    this._itensMenuModerador = Object.assign([], ModeradorMenu);
    this._itensMenuCoordenador = Object.assign([], CoordenadorMenu);
  }
}
