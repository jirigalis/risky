import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './core/auth.guard';

//http client
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/user.service';
import { TopicsService } from './topics/topics.service';
import { QuestionService } from './question/question.service';
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
  ],
  imports: [
    BrowserModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
