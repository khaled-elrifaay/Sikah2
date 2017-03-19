import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobilePagePage } from '../mobile-page/mobile-page';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPagePage');
  }
gotomobile(){
  this.navCtrl.push(MobilePagePage);
}
}
