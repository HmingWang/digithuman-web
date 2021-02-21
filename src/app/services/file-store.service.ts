import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileStoreService {

  constructor(private http: HttpClient) {
  }

  getFileList() {
    return this.http.get(`${BASE_URL + '/api/filestore'}`);
  }

  getFile(id: number) {
    return this.http.get(BASE_URL + '/api/filestore/' + id);
  }

  deleteFileById(id: number) {
    return this.http.get( BASE_URL + '/api/filestore/del/' + id);
  }


}
