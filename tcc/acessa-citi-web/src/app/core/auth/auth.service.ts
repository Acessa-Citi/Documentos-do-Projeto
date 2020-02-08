import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserAuth, UserCredential, User } from '../../models/user.model'

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    editAlerForRedirected: boolean;
    editAlertForRedirectedStr: string;
    idTokenUser: Observable<string>;
    userAuth: UserAuth;

    constructor(@Optional() @SkipSelf() auth: AuthService,
                private angularFireAuth: AngularFireAuth,
                private angularFirestore: AngularFirestore,
                private router: Router){
        if(auth){
            throw new Error('AuthService alredy injected');
        }
        this.editAlerForRedirected = false;
        this.editAlertForRedirectedStr = 'SEM STR NENHUMA';
        this.configUsersObservables();
    }

    configUsersObservables(){
        this.idTokenUser = this.angularFireAuth.diToken;

        this.userAuth = this.angularFireAuth.authState.pipe(switchMap( user => {
            if(user){
                this.updateUserWithAuth(user);
                return this.angularFirestore.doc<user>(`usuario/${user.email}`).valueChanges();
            }else {
                return of(null);
            }
        } ));
    }

    private async updateUserWithAuth(authUser: UserAuth){
        const userData: UserAuth = {
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            emailVerified: authUser.emailVerified
        };
        if(authUser.photeUrl){
            userData.photeUrl = authUser.photeUrl;
        }

        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`usuario/${authUser.email}`);
        return userRef.set(userData, { merge: true }).catch( error => {
            console.error('Prolemas ao alterar status do usuario autenticado!!', error);
        } );
    }
}