import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePicker } from '@ionic-native/date-picker';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IntroductionPage } from '../pages/introduction/introduction';
import { RecoveryPage } from '../pages/recovery/recovery';
import { RegistrerPage } from '../pages/registrer/registrer';
import { StatisticsPage } from './../pages/statistics/statistics';
import { ProductsPage } from '../pages/products/products';
import { AdvertisementPage } from './../pages/advertisement/advertisement';
import { NotificationPage } from './../pages/notification/notification';
import { TextingPage } from './../pages/texting/texting';
import { ProfilePage } from './../pages/profile/profile';
import { NotificationDetailPage } from './../pages/notification-detail/notification-detail';
import { NewAdvertisementPage } from './../pages/new-advertisement/new-advertisement';
import { CreateAdvertisementPage } from './../pages/create-advertisement/create-advertisement';
import { ConfigAdvertisementPage } from './../pages/config-advertisement/config-advertisement';
import { ChatPage } from './../pages/chat/chat';
import { PurchasePage } from './../pages/purchase/purchase';


import { Localstorage } from './../_helpers/localstorage.controller';
import { Constants } from './../_helpers/constants.controller';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    IntroductionPage,
    RecoveryPage,
    RegistrerPage,
    ProductsPage,
    AdvertisementPage,
    NotificationPage,
    TextingPage,
    ProfilePage,
    StatisticsPage,
    NotificationDetailPage,
    NewAdvertisementPage,
    CreateAdvertisementPage,
    ConfigAdvertisementPage,
    ChatPage,
    PurchasePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp ,{ scrollAssist: false, autoFocusAssist: false } ),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    IntroductionPage,
    RecoveryPage,
    RegistrerPage,
    ProductsPage,
    AdvertisementPage,
    NotificationPage,
    TextingPage,
    ProfilePage,
    StatisticsPage,
    NotificationDetailPage,
    NewAdvertisementPage,
    CreateAdvertisementPage,
    ConfigAdvertisementPage,
    ChatPage,
    PurchasePage,
  ],
  providers: [
    Constants,
    Localstorage,
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
