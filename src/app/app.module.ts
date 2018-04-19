import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { PersistComp } from '../logic/PersistComp';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Device } from '@ionic-native/device';
import { FIRE_CONF } from './firebase.credentials';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { GroupsPage } from '../pages/groups/groups';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { JoiningPage } from '../pages/joining/joining';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { CreateAccountPage } from '../pages/create-account/create-account';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    CreateAccountPage,
    CreateGroupPage,
    GroupsPage,
    MainMenuPage,
    JoiningPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIRE_CONF),
    AngularFireDatabaseModule,              
    AngularFireAuthModule     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    CreateAccountPage,
    CreateGroupPage,
    GroupsPage,
    MainMenuPage,
    JoiningPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PersistComp,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
