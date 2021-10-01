import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const requestData = {
      username: username,
      password: password,
    };

    return this.http.post(`${this.baseUri}/login`, requestData);
  }
}
