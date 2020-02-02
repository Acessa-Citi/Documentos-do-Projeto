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
    email: string,
    urlProfileIsLoged: boolean;
    uid?: string;
}