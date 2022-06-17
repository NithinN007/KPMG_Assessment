import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { IUser } from '../../packXprez-interfaces/User';
import { catchError, map,tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { IToken } from 'src/app/interfaces/token';
import { IUser } from 'src/app/interfaces/User';
//import { IToken } from 'src/app/packXprez-interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this._isLoggedIn$.asObservable();
  constructor(private http: HttpClient) { }

  validateCredentials(id: string, password: string): Observable<IToken> {
    var userObj: IUser;
   // var token:IToken;
    userObj = { Name: id, Password: password };
    return this.http.post<IToken>('http://localhost:46886/api/Users/authenticate', userObj).pipe(

    tap(token=>{
      this._isLoggedIn$.next(true);
      localStorage.setItem('auth',token.token);
    }),catchError(this.errorHandler)

    );
     // catchError(this.errorHandler));
  }

  Testing(): Observable<string[]> {
   // var userObj: IUser;
   // userObj = { EmailId: id, UserPassword: password };
    return this.http.get<string[]>('http://localhost:46886/api/Users').pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }


}
