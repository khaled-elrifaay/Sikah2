import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
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
import {BeforeSignupPage} from '../pages/before-signup/before-signup';
import { DriverIdPage } from '../pages/driver-id/driver-id';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Lang;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Splash', component: Splash },
      { title: 'Home', component: Home },
      { title: 'Estimate Fare', component: Estimate },
      { title: 'Requested', component: Requested },
      { title: 'Onway', component: Onway },
      { title: 'Arrived', component: Arrived },
      { title: 'Help', component: Help },
      { title: 'Canceled', component: Canceled },
      { title: 'Payment', component: Payment },
      { title: 'Summary', component: Sum },
      { title: 'Lang', component: Lang },
      { title: 'DriverIdPage', component: DriverIdPage },
      { title: 'Sign-up', component: BeforeSignupPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
