import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { LoginInputsComponent } from './components/login-inputs/login-inputs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetupNameComponent } from './components/setup-name/setup-name.component';
import { FeedContentComponent } from './components/feed-content/feed-content.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ContentSosButtonComponent } from './components/content-sos-button/content-sos-button.component';
import { ContentTopFiveComponent } from './components/content-top-five/content-top-five.component';
import { ContentNavigationComponent } from './components/content-navigation/content-navigation.component';
import { ContentEmotionGalleryComponent } from './components/content-emotion-gallery/content-emotion-gallery.component';
import { MessagesContentComponent } from './components/messages-content/messages-content.component';
import { ContentTopViewComponent } from './components/content-top-view/content-top-view.component';
import { ContentMessagesGalleryComponent } from './components/content-messages-gallery/content-messages-gallery.component';
import { ConnectionsContentComponent } from './components/connections-content/connections-content.component';
import { ContentConnectionsGalleryComponent } from './components/content-connections-gallery/content-connections-gallery.component';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { MenuScreenComponent } from './components/menu-screen/menu-screen.component';
import { SearchConnectionsComponent } from './components/search-connections/search-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginInputsComponent,
    SetupNameComponent,
    FeedContentComponent,
    ContentHeaderComponent,
    ContentSosButtonComponent,
    ContentTopFiveComponent,
    ContentNavigationComponent,
    ContentEmotionGalleryComponent,
    MessagesContentComponent,
    ContentTopViewComponent,
    ContentMessagesGalleryComponent,
    ConnectionsContentComponent,
    ContentConnectionsGalleryComponent,
    UpdateStatusComponent,
    MenuScreenComponent,
    SearchConnectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
