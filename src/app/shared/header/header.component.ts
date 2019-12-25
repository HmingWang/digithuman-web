import {Component, Input, OnInit} from '@angular/core';
import {AuthorizeService} from '../../services/authorize.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()  userName: any;

  constructor(private router: Router,
              private authService: AuthorizeService,
              private message: NzMessageService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(
      it => {
        console.log(it);
        if (it[0] === 'OK') {
          this.router.navigateByUrl('/auth/login');
        } else {
          this.message.error(it[0]);
        }
      }
    );

  }
}
