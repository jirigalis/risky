import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  getUsers(): void {
  	this.userService.getUsers()
		  .subscribe(users => {this.users = users; console.log(users)});
  }

  login(): void {
    this.userService.login(this.user)
      .subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user.user));
        localStorage.setItem('token', user.token)
        this.router.navigate(['/']);
      })
  }

}
