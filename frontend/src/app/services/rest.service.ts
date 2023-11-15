import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  constructor(protected http:HttpClient) { }

  abstract get endpoint(): string;

  all(page?: number): Observable<any> {
    let url = this.endpoint;

    if (page) {
      url += `?page=${page}`;
    }

    return this.http.get(url);
  }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.endpoint}/${id}`);
    }
  
    create(data: any): Observable<any> {
      return this.http.post(this.endpoint, data)
    }
  
    get(id: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }
  
  update(id:number, data: any): Observable<any> {
  return this.http.put(`${this.endpoint}/${id}`,data);
  }

}
