import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor{
    constructor (private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(catchError(err=>{
           if([401,403].indexOf(err.status) !==-1){
               this.authService.logout();
               location.reload();
           }
           const  error = err.error.message || err.statusText;
           return throwError(error);
           
       }))
    }
    
}