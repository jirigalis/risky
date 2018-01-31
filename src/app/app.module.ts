import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

//http client
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { HomeComponent } from './home/home.component';
import { TopicTileComponent } from './topics-list/topic-tile/topic-tile.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
