import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BASE_URL} from '../app.globals';

@Injectable({
  providedIn: 'root'
})
export class FileStoreService {

  private url: string = BASE_URL + '/api/getfilelist';
  private owner = 'whaim';

  constructor(private http: HttpClient) { }



  getFileList(owner: string ) {
    const params = new HttpParams()
      .append('owner', `${owner}`);

    return this.http.get(`${this.url}`, { params  });
  }
}
