import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';
import { TopicNewComponent } from './topics/topic-new/topic-new.component';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  
  { path: 'topics', component: TopicsListComponent, canActivate: [AuthGuard], pathMatch: 'full'},
  { path: 'topics/new', component: TopicNewComponent, canActivate: [AuthGuard] },
  { path: 'topics/:id', component: TopicDetailComponent, canActivate: [AuthGuard] },
  
  { path: 'questions', component: QuestionListComponent, canActivate: [AuthGuard]},
  { path: 'questions/new', component: QuestionNewComponent, canActivate: [AuthGuard]},
  { path: 'questions/:id', component: QuestionDetailComponent, canActivate: [AuthGuard]},
  
  { path: 'events', component: EventListComponent, canActivate: [AuthGuard], pathMatch: 'full'},

  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
