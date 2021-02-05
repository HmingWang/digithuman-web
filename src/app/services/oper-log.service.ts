import {Injectable} from '@angular/core';
import {BASE_URL} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperLogService {

  constructor(private http: HttpClient) {
  }

  getLogs() {
    return this.http.get(BASE_URL + '/api/log/');
  }
}
