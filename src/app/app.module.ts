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
import { DndListModule } from 'ngx-drag-and-drop-lists';

import { HttpClientModule } from '@angular/common/http';
import { ModalService } from './shared/modal/modal.service';
import { UserService } from './core/user.service';
import { TopicsService } from './topics/topics.service';
import { QuestionService } from './question/question.service';
import { LevelService } from './level/level.service';
import { EventService } from './event/event.service';
import { CompetitorService } from './competitor/competitor.service';
import { AuthInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { TopicTileComponent } from './topics/topics-list/topic-tile/topic-tile.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';
import { TopicFormComponent } from './topics/topic-form/topic-form.component';

import { LoginFormComponent } from './login/login-form/login-form.component';

import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionFormComponent } from './question/question-form/question-form.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';

import { SubnavComponent } from './shared/subnav/subnav.component';

import { EventListComponent } from './event/event-list/event-list.component';
import { TopicNewComponent } from './topics/topic-new/topic-new.component';
import { ModalComponent } from './shared/modal/modal/modal.component';
import { CompetitorListComponent } from './competitor/competitor-list/competitor-list.component';
import { CompetitorDetailComponent } from './competitor/competitor-detail/competitor-detail.component';
import { CompetitorFormComponent } from './competitor/competitor-form/competitor-form.component';
import { CompetitorNewComponent } from './competitor/competitor-new/competitor-new.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { ContentWrapperComponent } from './core/content-wrapper/content-wrapper.component';


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
    TopicFormComponent,
    TopicNewComponent,
    ModalComponent,
    CompetitorListComponent,
    CompetitorDetailComponent,
    CompetitorFormComponent,
    CompetitorNewComponent,
    EventNewComponent,
    EventFormComponent,
    EventDetailComponent,
    ContentWrapperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    DndListModule
  ],
  providers: [
    AuthGuard,
    ModalService,
    UserService,
    TopicsService,
    QuestionService,
    LevelService,
    EventService,
    CompetitorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
