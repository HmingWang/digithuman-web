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

  getUserInfo() {
    return this.http.get(BASE_URL + '/api/auth/userinfo');
  }

  login(username: string, password: string, remember: boolean) {
    const params = new HttpParams()
      .append('username', username)
      .append('password', password)
      .append('remember', remember ? 'true' : 'false');
    return this.http.post(BASE_URL + '/api/auth/login', params);
  }

  register(usercode: string,
           password: string,
           username: string,
           mobile: string,
           department: string) {
    const params = new HttpParams()
      .append('usercode', usercode)
      .append('password', password)
      .append('username', username)
      .append('mobile', mobile)
      .append('department', department);
    return this.http.post(BASE_URL + '/api/auth/register', params);

  }

  logout() {
    return this.http.get(BASE_URL + '/api/auth/logout');
  }
}


