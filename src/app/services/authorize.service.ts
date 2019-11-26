import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient) {
  }

  getUserInfo() {
    return this.http.get(BASE_URL + '/api/user');
  }

  login(username: string, password: string, remember: boolean) {
    const params = new HttpParams()
      .append('username', username)
      .append('password', password)
      .append('remember', remember ? 'true' : 'false');
    return this.http.post(BASE_URL + '/api/auth/login', params);
  }
}


