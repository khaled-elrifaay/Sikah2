import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Splash } from '../pages/splash/splash';
import { Lang } from '../pages/lang/lang';
import { Home } from '../pages/home/home';
import { Estimate } from '../pages/estimate/estimate';
import { Requested } from '../pages/requested/requested';
import { Onway } from '../pages/onway/onway';
import { Arrived } from '../pages/arrived/arrived';
import { Help } from '../pages/help/help';
import { Canceled } from '../pages/canceled/canceled';
import { Payment } from '../pages/payment/payment';
import { Sum } from '../pages/sum/sum';
import {Http} from '@angular/http';
import {GlobalService} from '../providers/global-service';
import {BeforeSignupPage} from '../pages/before-signup/before-signup';
import {SignupPage} from '../pages/user-signup/signup';
import {EmailPagePage} from '../pages/email-page/email-page';
import {PasswordPagePage} from '../pages/password-page/password-page';
import {MobilePagePage} from '../pages/mobile-page/mobile-page';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

export function createTranslateLoader(http: any) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Home,
    Estimate,
    Requested,
    Onway,
    Arrived,
    MobilePagePage,
    Help,
    Canceled,
    Payment,
    Sum,
    Lang,
    Splash,
    BeforeSignupPage,
    SignupPage,
    EmailPagePage,
    PasswordPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),TranslateModule.forRoot(),
     TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Estimate,
    Requested,
    Onway,
    Arrived,
    Help,
    Canceled,
    Payment,
    Sum,
    Lang,
    Splash,
    BeforeSignupPage,
    SignupPage,
    EmailPagePage,
    PasswordPagePage,
    MobilePagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GlobalService]
})
export class AppModule {}
