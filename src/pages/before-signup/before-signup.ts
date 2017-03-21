import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BeforeLoginPage} from '../before-login/before-login';
/*
  Generated class for the BeforeSignup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-before-signup',
  templateUrl: 'before-signup.html'
})
export class BeforeSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeforeSignupPage');
  }
gotousersign(){
  this.navCtrl.push(BeforeLoginPage);
}
/*
goToDrioverSign(){
  this.navCtrl.push(DriverNamePage);
}
*/

}
