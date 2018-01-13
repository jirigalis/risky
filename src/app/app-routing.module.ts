import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'topic/:id', component: TopicDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
