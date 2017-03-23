import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobilePagePage } from '../mobile-page/mobile-page';
import { DriverIdPage } from '../driver-id/driver-id';
import {BeforeSignupPage} from "../before-signup/before-signup";
import {BeforeLoginPage} from "../before-login/before-login";

/*
  Generated class for the PasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-password-page',
  templateUrl: 'password-page.html'
})
export class PasswordPagePage {
  public user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPagePage');
  }
gotomobile(){
  // 0 determine user
  // 1 determine driver
  if(this.user.type == BeforeSignupPage.userType ||
      (this.user.type == BeforeSignupPage.driverType &&
      this.user.operation == BeforeLoginPage.loginCode ))
  {
    this.navCtrl.push(MobilePagePage,this.user);
  }
  else
  {
    this.navCtrl.push(DriverIdPage,this.user);
  }
  
}
}
