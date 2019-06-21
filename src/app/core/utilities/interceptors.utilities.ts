import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonUtilities} from './common.utilities';
import {Security} from './security.utilities';

@Injectable({
    providedIn: 'root'
})
export class ServerURLInterceptor implements HttpInterceptor {

    params: any = {};
    pathUrl: string = null;

    // function which will be called for all http calls
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // how to update the request Parameters
        /*const updatedRequest = request.clone({
          headers: request.headers.set("Authorization", "Some-dummyCode"),
        });
          //logging the updated Parameters to browser's console
          console.log("Before making api call : ", updatedRequest);*/

        //  ESDRAS 18062019

        if (request.body !== null) {
            this.params = request.body;
        }
        if (!CommonUtilities.IsUndefinedOrNull(request) && !CommonUtilities.IsUndefinedOrNull(request.headers)) {
            request.headers.append('Content-Type', 'application/json');
        }
        // let IdCurrentStructure = 0;
        // let IdCurrentTenant = 0;
        let IdCurrentUser = 0;
        // let IdCurrentPays = 0;
        // let IdCurrentVille = 0;
        // let IdCurrentClient = 0;
        // let Token = null;
        if (Security.userIsLogin()) {
            // IdCurrentTenant = 1;
            // IdCurrentStructure = Security.getCurrentUser().IdStructure;
            // IdCurrentUser = Security.getIdUtilisateur();
            // IdCurrentPays = Security.getCurrentUser().IdPays;
            // IdCurrentVille = Security.getCurrentUser().IdVille;
            // IdCurrentClient = Security.getCurrentUser().IdClient;
            // Token = Security.getCurrentUser().token;
        }

        if (!CommonUtilities.IsUndefinedOrNull(request) && !CommonUtilities.IsUndefinedOrNull(request.body)) {
            // request.body.IdCurrentTenant = IdCurrentTenant;
            // request.body.IdCurrentStructure = IdCurrentStructure;
            // request.body.IdCurrentUser = IdCurrentUser;
            // request.body.IdCurrentPays = IdCurrentPays;
            // request.body.IdCurrentVille = IdCurrentVille;
            // request.body.IdCurrentClient = IdCurrentClient;

        }

        /*if (!CommonUtilities.IsUndefinedOrNull(Token) && !CommonUtilities.StringIsUndefinedOrNull(Token.access_token)) {
            if (!CommonUtilities.IsUndefinedOrNull(request) && !CommonUtilities.IsUndefinedOrNull(request.headers)) {
                 request.headers.append('Authorization', 'Bearer ' + Token.access_token);
            }
        }*/


        return next.handle(request);
    }
}
