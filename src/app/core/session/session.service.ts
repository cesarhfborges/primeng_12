import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Auth} from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private authKey: string = btoa('application_auth');
  private currentUser: BehaviorSubject<Auth|undefined> = new BehaviorSubject(undefined);

  constructor() {
    const l = localStorage.getItem(this.authKey);
    if (!!l) {
      this.setAuth(JSON.parse(l));
    }
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
    this.currentUser.next(value);
  }
}
