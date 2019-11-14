import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../app.globals';

@Injectable({
  providedIn: 'root'
})
export class FileStoreService {

  private owner = 'whaim';

  constructor(private http: HttpClient) {
  }

  getFileList(owner: string) {
    const params = new HttpParams()
      .append('owner', `${owner}`);
    return this.http.get(`${BASE_URL + '/api/filestore'}`, {params});
  }

  getFile(id: number) {
    return this.http.get(BASE_URL + '/api/filestore/' + id);
  }

  deleteFileById(id: number) {
    console.log('delete url :' + BASE_URL + '/api/filestore/' + id);
    return this.http.request('DELETE', BASE_URL + '/api/filestore/' + id);
  }


}
