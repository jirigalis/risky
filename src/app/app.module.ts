import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//http client
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './core/user.service';
import { AuthInterceptor } from './http-interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import { HomeComponent } from './home/home.component';
import { TopicTileComponent } from './topics/topics-list/topic-tile/topic-tile.component';
import { TopicDetailComponent } from './topics/topic-detail/topic-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginFormComponent } from './login/login-form/login-form.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'topics',
    component: TopicsListComponent
  }
  /*{
    path: '**',
    component: PageNotFoundComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopicsListComponent,
    HomeComponent,
    TopicTileComponent,
    TopicDetailComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
