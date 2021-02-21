import {Component, OnInit} from '@angular/core';
import {OperLog} from '../../models/oper-log';
import {NzMessageService} from 'ng-zorro-antd/message';
import {OperLogService} from '../../services/oper-log.service';

@Component({
  selector: 'app-operate-log',
  templateUrl: './operate-log.component.html',
  styleUrls: ['./operate-log.component.scss']
})
export class OperateLogComponent implements OnInit {

  operLogs: OperLog[] = new Array<OperLog>();
  isSpanning = false;
  operLog: OperLog;

  constructor(private operLogService: OperLogService,
              private message: NzMessageService,) {
  }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.isSpanning = true;
    this.operLogService.getLogs().subscribe(it => {
      this.operLogs = it as OperLog[];

      this.operLogs.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        } else {
          return 1;
        }
      });
    }, error => {
      this.message.error(error);
    }, () => {
      this.isSpanning = false;
    });


  }
}
