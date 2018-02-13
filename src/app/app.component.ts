import { Component } from '@angular/core';

import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notifyOptions = {
  	clickIconToClose: true,
  	showProgressBar: true,
  	timeOut: 3000
  }
}
