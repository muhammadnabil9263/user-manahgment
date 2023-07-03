import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  localUsers: any;
  ngOnInit(): void {
    this.onGetUsers(); 
  }

  onGetUsers(): void {
    this.userService.getUsers().subscribe((response) => {
      console.log(response);
      this.localUsers = response;
    });
  }

  getSearchResult(searchString: any) {
    this.userService.searchUsers(searchString.search).subscribe((response) => {
      console.log(response)
      this.localUsers = response;
    });
  }


  userforcreation = {
    id: 0,
    userName: 'string',
    name: 'string',
    email: 'string',
    password: 'string',
    orgnizationId: 1,
  };
}
