import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileSegmentService {

  constructor(private http: HttpClient) {
  }

  getFileSegment(id: number) {
    return this.http.get(BASE_URL + '/api/segment/' + id);
  }
}
