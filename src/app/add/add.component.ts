import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
[x: string]: any;
  constructor(private userService: UserService) {}

  organizations: any;
  ngOnInit(): void {
    this.onGetOrgnizations();
  }

  onGetOrgnizations(): void {
    this.userService.getOrgnizations().subscribe((response) => {
      console.log(response);
      this.organizations = response;
    });
  }

  user = {
    "userName": "localhost11",
    "name": "localhost11",
    "email": "localhost11@example.com",
    "password": "localhost11",
    "confirmPassword": "localhost11",
    "orgnizationId": 1
  }
  
  data:any

  getNewUser(data: any) {
    console.table(data);
    this.data=data
    console.table(this.user);

    this.onPostUser(data);

  }

  onPostUser(user: any): void {
    this.userService.createUser(user).subscribe((response) => {
      console.log(response);
    },error=>{
      console.log(error.error)});
  }
}
