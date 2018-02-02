import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

import { User } from '../../core/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  users: User[];

  user = {
    login: "",
    password: ""
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUsers(): void {
  	this.userService.getUsers()
		  .subscribe(users => {this.users = users; console.log(users)});
  }

  login(): void {
    this.userService.login(this.user)
      .subscribe(user => {

        localStorage.setItem('user', user);
        console.log(user);
      })
  }

}
