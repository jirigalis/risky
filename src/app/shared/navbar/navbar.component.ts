import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() items;

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.user.logout();
    this.router.navigate(['/login']);
  }

  performAction(item) {
    item.action();
  }

}
