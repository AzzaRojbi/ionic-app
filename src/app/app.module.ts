import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { TasksPage } from '../pages/tasks/tasks';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddtodoPage } from '../pages/addtodo/addtodo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TasksPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddtodoPage
  ],
  imports: [
  BrowserModule,
    IonicModule.forRoot(MyApp),
    
        IonicStorageModule.forRoot({
              name: '__mydb',
              driverOrder: ['indexeddb', 'sqlite', 'websql']
         })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TasksPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddtodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
