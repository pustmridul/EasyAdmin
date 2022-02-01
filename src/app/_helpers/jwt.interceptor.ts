import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.Token;
        const isApiUrl = req.url.startsWith(environment.apiUrl);

        if(isLoggedIn && isApiUrl){
            req = req.clone({
                setHeaders: {
                    Authorization : `Bearer ${currentUser.Token}`
                }
            });
        }
        return next.handle(req);
    }
}