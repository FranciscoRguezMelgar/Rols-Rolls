import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicStorageModule } from '@ionic/storage';

import { BtComp } from '../logic/BtComp';
import { PersistComp } from '../logic/PersistComp';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { GroupsPage } from '../pages/groups/groups';
import { MainMenuPage } from '../pages/main-menu/main-menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateGroupPage,
    GroupsPage,
    MainMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateGroupPage,
    GroupsPage,
    MainMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    IonicStorageModule,
    BtComp,
    PersistComp,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
