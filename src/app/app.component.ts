import { Component, ViewChild } from '@angular/core';
import {Nav, Platform, AlertController} from 'ionic-angular';
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
import {BeforeLoginPage} from "../pages/before-login/before-login";
import {GlobalService} from "../providers/global-service";
import {Storage} from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public user;
  rootPage: any = Lang;

  pages: Array<{title: string, component: any}>;
  pageslogged: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform,public alertCtrl: AlertController,public globalService : GlobalService,
      public storage: Storage) {
    this.storage.get('USERKey').then((res) => {
      if (res != null) {
        this.globalService.user = JSON.parse(res);
        this.globalService.loggedIn = true;
      }

    });



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
      { title: 'Sign-up', component: BeforeSignupPage },
      { title: 'Sign-Out', component: BeforeSignupPage },
    ];
  this.pageslogged = [
    { title: 'Home', icon: 'home',component: Home },
    { title: 'sign-In', icon: 'home',component: BeforeSignupPage },

  ]
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

    /*if (this.globalService.loggedIn) {
      /!*this.user = this.globalService.user.username;*!/
      console.log(this.user)
    }*/
    if (page.title == 'Sign-Out') {
      this.globalService.logout();
      this.showAlert();
    } else {
      this.nav.push(page.component);
    }
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'logged out'
      /*/!*this.globalService.language == 'en' ? 'Logged out' : *!/'تسجيل الخروج'*/,
      subTitle:
      /*this.globalService.language == 'en' ? 'Logged out successfully!' : */'تم تسجيل الخروج بنجاح!',
      buttons: [/*this.globalService.language == 'en' ? 'OK' : */'حسناً']
    });
    alert.present();
  }
}
