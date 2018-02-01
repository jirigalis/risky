import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void {
  	this.users = this.userService.getUsers()
		.subscribe(users => this.users = users);
  }

}
