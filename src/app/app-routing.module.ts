import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'topics', component: TopicsListComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'topic/:id', component: TopicDetailComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: QuestionListComponent, canActivate: [AuthGuard]},
  { path: 'questions/new', component: QuestionNewComponent, canActivate: [AuthGuard]},
  { path: 'questions/:id', component: QuestionDetailComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
