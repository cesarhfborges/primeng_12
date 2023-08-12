import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SessionService} from '../session/session.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private sessionService: SessionService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkRoute(state);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkRoute(state);
    }

    private checkRoute(state: RouterStateSnapshot): boolean {
        if (state.url !== '/') {
            const routes = [
                'login',
                'cadastro',
                'recuperar-senha'
            ];
            const rotaAtual = state.url.split('/').filter(i => i !== '')[0];
            if (state.url === '/error') {
                return true;
            } else if (this.sessionService.isAuthenticated()) {
                if (routes.includes(rotaAtual)) {
                    this.router.navigate(['/home']).catch();
                    return false;
                }
                return true;
            } else {
                if (routes.includes(rotaAtual)) {
                    return true;
                } else {
                    this.router.navigate(['/login']).catch();
                    return false;
                }
            }
        }
        return true;
    }
}
