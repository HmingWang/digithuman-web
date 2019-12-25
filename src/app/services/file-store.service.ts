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
    console.log('delete url :' + BASE_URL + '/api/filestore/' + id);
    return this.http.request('DELETE', BASE_URL + '/api/filestore/' + id);
  }


}
