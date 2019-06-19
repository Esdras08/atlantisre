import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Security} from '../utilities/security.utilities';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(public router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if ((<any>next.data).permissions.are === 'AUTENTICATED') {
            if (!Security.userIsLogin()) {
                this.router.navigate(['/login']);
            }
            return Security.userIsLogin();
        } else if ((<any>next.data).permissions.except === 'AUTENTICATED') {
            if (Security.userIsLogin()) {
                this.router.navigate(['/']);
            }
            return !Security.userIsLogin();
        }
    }
}
