import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, observable} from 'rxjs';
import { User } from '../_models';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }
   public get currentUserValue(): User{
     return this.currentUserSubject.value;
   }
  login(username: string, password: string): Observable<User>
  {
    var data ={
      Username: username,
      Password: password,
      Mode: "password"
    }
    return this.http.post<User>(environment.apiUrl + 'api/login/authenticate', data, httpOptions)
    .pipe(map((result) =>
    {
    if (result && result.Token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(result));
      this.currentUserSubject.next(result);
    }

  return result;}));
}
  

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
}
