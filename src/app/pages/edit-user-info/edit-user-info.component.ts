import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AuthUser} from '../../models/auth-user';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {
  validateForm: FormGroup;
  user: AuthUser = new AuthUser();

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // email: [null, [Validators.email, Validators.required]],
      email: [null, Validators.required],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]]
    });

    this.userService.getUserInfo().subscribe(obj => {
      this.user = obj as AuthUser;
    });
  }

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.userService.editUserInfo(
      this.validateForm.value.email,
      this.validateForm.value.nickname,
      this.validateForm.value.phoneNumber,
      this.validateForm.value.website).subscribe(
      it => {
        console.log(it);
        if (it[0] === 'OK') {
          this.message.success('修改成功！');
        } else {
          this.message.error(it[0]);
        }
      }
    );
  }

}
