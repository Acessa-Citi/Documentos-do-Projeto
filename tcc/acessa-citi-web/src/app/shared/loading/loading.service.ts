import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LoadingService {
    private loadingHash: {[di: string]: number};

    constructor(){
        this.loadingHash = {}
    }

    isLoading(uid: string): boolean{
        if(this.loadingHash[uid] === undefined){
            return false;
        }
        return (this.loadingHash[uid] > 0);
    }

    initializeLoading(uid: string, value: number){
        this.loadingHash[uid] = value;
    }

    incrementLoading(uid: string){
        this.loadingHash[uid]++;
    }

    finalizeLoading(uid: string, force?: boolean){
        if(force === undefined || force === null || !force){
            this.loadingHash[uid]--;
        }else {
            this.loadingHash[uid] = 0;
        }

    }
}