import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../app.globals';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileFeatureService {

  constructor(private http: HttpClient) {
  }

  getFileFeature(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/' + id);
  }

  getCharFrequency(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/charfreq/' + id);
  }

  getWordFrequency(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/wordfreq/' + id);
  }

  getAbstract(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/abstract/' + id);
  }

  getKeywords(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/keywords/' + id);
  }

  getTranslate(id: number) {
    return this.http.get(BASE_URL + '/api/filefeature/translate/' + id);
  }
}
