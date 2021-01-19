import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from '../services/authorize.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ErrorService} from '../services/error.service';
import {AuthUser} from '../models/auth-user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = false;

  user: AuthUser = new AuthUser();

  constructor(private userService: UserService, private message: NzMessageService, private errorService: ErrorService) {

  }

  ngOnInit() {
    this.isCollapsed = false;
    this.userService.getUserInfo().subscribe(obj => {
      this.user = obj as AuthUser;
    }, error => this.errorService.handleError(error));
  }
}
