import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  requestOptions = {
    headers: new HttpHeaders(),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  getUserInfo(username: string) {
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


