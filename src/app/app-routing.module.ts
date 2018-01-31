import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'topic/:id', component: TopicDetailComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
