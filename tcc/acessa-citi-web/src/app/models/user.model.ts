import { environment } from '../../environments/environment';

export class User{
    uid?: string;
    email: string;
    firstName: string;
    lastName: string;
    creationData: string;
    urlProfile: string;
    urlProfileIsLoged: boolean;

    constructor(){
        this.uid = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.urlProfile = '';
        this.creationData = '';
        this.urlProfileIsLoged = null;
    }
}

export interface UserAuth{
    uid?: string,
    email: string,
    emailVerified?: boolean,
    displayName: string,
    photeUrl?: string,
    ativo?: boolean,
    contaLoged: boolean
}

export interface UserCredential{

}