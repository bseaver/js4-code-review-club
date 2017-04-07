import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { MemberPipe } from './member.pipe';
import { ProfilesComponent } from './profiles/profiles.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    AdminComponent,
    AboutComponent,
    MemberPipe,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
