import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../app.globals';

@Injectable({
  providedIn: 'root'
})
export class FileFeatureService {

  constructor(private http: HttpClient) {
  }

  getFileFeature(id: bigint) {

    return this.http.get(BASE_URL + '/api/filefeature/' + id);
  }
}
