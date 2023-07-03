import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {}
  isMatched: boolean = false;
  isupdated: boolean = false;
  ngOnInit(): void {}
  resetPasswordBody ={
    "password": "",
    "newPassword": ""
  };
  resetPassword(data: any) {
    console.log(data);
    if (data.newpassword == data.confirmNewPassword) {
      this.isMatched = false;
      this.resetPasswordBody.password = data.currentpassword;
      this.resetPasswordBody.newPassword = data.newpassword;
      console.log(this.resetPasswordBody);
      this.onResetPassword(this.resetPasswordBody, this.router.snapshot.params['id'])
    } else {
      this.isMatched = true;
      
    }
  }
  onResetPassword(body: any, id: any) {
    console.log("here")
    this.userService.resetPassword(body,id).subscribe((response) => {
       this.isupdated=true
      });
  }
}
