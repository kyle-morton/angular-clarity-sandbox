import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public Get(endpoint: string) {
    return this.http.get(endpoint);
  }

  public Post(endpoint: string, data: any) {
    return this.http.post(endpoint, data);
  }

}
