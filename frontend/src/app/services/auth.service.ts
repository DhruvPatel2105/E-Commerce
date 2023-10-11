import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected http:HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/register`, data);
  }

  user(): Observable<any> {
    return this.http.get<any>(`${environment.api}/user`);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${environment.api}/logout`, {});
  }
  

}
