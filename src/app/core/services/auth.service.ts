import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Auth} from '../interfaces/auth';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authKey: string = btoa('application_auth');
    private currentUser: BehaviorSubject<Auth|undefined> = new BehaviorSubject(undefined);

    constructor(
        private http: HttpClient
    ) {
        const l = localStorage.getItem(this.authKey);
        if (!!l) {
            this.setAuth(JSON.parse(l));
        }
    }

    public login(data: any): Observable<any> {
        return this.http.post(`${environment.base_url}/v1/login`, data).pipe(
            tap(data => {
                this.setAuth(data);
            })
        );
    }

    public isAuthenticated(): boolean {
        return !!this.currentUser?.value;
    }

    public user(): Observable<Auth|undefined> {
        return this.currentUser.asObservable();
    }

    public logout(): void {
        localStorage.removeItem(this.authKey);
        this.currentUser.next(undefined);
    }

    private setAuth(value: any): void {
        localStorage.setItem(this.authKey, JSON.stringify(value));
        this.currentUser.next(value);
    }
}
