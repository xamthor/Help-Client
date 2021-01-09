import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginScreenComponent} from './components/login-screen/login-screen.component';
import {SetupNameComponent} from './components/setup-name/setup-name.component';
import {FeedContentComponent} from './components/feed-content/feed-content.component';
import {MessagesContentComponent} from './components/messages-content/messages-content.component';
import {ConnectionsContentComponent} from './components/connections-content/connections-content.component';
import {UpdateStatusComponent} from './components/update-status/update-status.component';
import {MenuScreenComponent} from './components/menu-screen/menu-screen.component';
import {SearchConnectionsComponent} from './components/search-connections/search-connections.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'setup', component: SetupNameComponent },
  { path: 'feed', component: FeedContentComponent},
  { path: 'message', component: MessagesContentComponent},
  {path: 'connections', component: ConnectionsContentComponent},
  {path: 'update-status', component: UpdateStatusComponent},
  {path: 'menu', component: MenuScreenComponent},
  {path: 'search-connections', component: SearchConnectionsComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
