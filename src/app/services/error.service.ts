import {Injectable} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {debug, debuglog, log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private message: NzMessageService, private router: Router) {
  }

  handleError(error: HttpErrorResponse) {

    if (error.status === 401) {
      log('401 auth field. redirect to login page.');
      this.router.navigateByUrl('/auth/login');
    }
  }
}
