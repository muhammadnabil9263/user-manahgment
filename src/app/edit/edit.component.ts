import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {}


  organizations: any;
  currentUser: any;
  isDataLoaded = false;
  userId=this.router.snapshot.params['id']
  ngOnInit(): void {
    this.getCurrentUser(this.router.snapshot.params['id']);
    this.onGetOrgnizations();
  }

  getCurrentUser(id: any) {
    console.log(id);
    this.userService.getUser(id).subscribe((response) => {
      this.currentUser = response;
      this.isDataLoaded = true;
    });
  }

  updateCurrentUser(data: any) {
    // this.currentUser.userName=data.username
    // this.currentUser.name=data.name
    // this.currentUser.email=data.email
    // this.currentUser.password=data.password
    // this.currentUser.orgnizationId=data.orgnizationId
    // console.log(this.currentUser);
    
    this.onPutCurrentUser(data,this.router.snapshot.params['id'])
  }

  onPutCurrentUser(user:any,id:any){
    this.userService.updateUser(user,id).subscribe((response) => {
      console.log("OK");
    });
  }

  onGetOrgnizations(): void {
    this.userService.getOrgnizations().subscribe((response) => {
      this.organizations = response;
    });
  }
}
