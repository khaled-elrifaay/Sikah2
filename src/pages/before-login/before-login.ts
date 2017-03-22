import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EmailPagePage} from "../email-page/email-page";
import {SignupPage} from "../user-signup/signup";

/*
  Generated class for the BeforeLogin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-before-login',
  templateUrl: 'before-login.html'
})
export class BeforeLoginPage {
  public user ;
  public pushLogin ;
  public pushSignUp ;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.user = navParams.data;
    this.pushLogin = EmailPagePage ;
    this.pushSignUp = SignupPage ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeforeLoginPage');
  }

}
