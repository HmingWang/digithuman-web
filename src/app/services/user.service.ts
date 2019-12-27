import {Injectable} from '@angular/core';
import {BASE_URL} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserInfo() {
    return this.http.get(BASE_URL + '/api/user');
  }

  changePassword(oldPassword: string, newPassword: string) {
    const params = new HttpParams()
      .append('oldPassword', oldPassword)
      .append('newPassword', newPassword);
    return this.http.post(BASE_URL + '/api/user/password', params);
  }

  editUserInfo(usercode: string, username: string, mobile: string, department: string) {
    const params = new HttpParams()
      .append('usercode', usercode)
      .append('username', username)
      .append('mobile', mobile)
      .append('department', department);
    return this.http.post(BASE_URL + '/api/user', params);
  }
}
