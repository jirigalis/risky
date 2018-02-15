import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/auth.guard';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/user.service';
import { TopicsService } from './topics/topics.service';
import { QuestionService } from './question/question.service';
import { LevelService } from './level/level.service';
import { EventService } from './event/event.service';
import { AuthInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { HomeComponent } from './home/home.component';
import { TopicTileComponent } from './topics/topics-list/topic-tile/topic-tile.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { SubnavComponent } from './shared/subnav/subnav.component';
import { EventListComponent } from './event/event-list/event-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsListComponent,
    HomeComponent,
    TopicTileComponent,
    TopicDetailComponent,
    LoginFormComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent,
    QuestionNewComponent,
    SubnavComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserService,
    TopicsService,
    QuestionService,
    LevelService,
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
