import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PasswordPagePage} from '../password-page/password-page';

/*
  Generated class for the EmailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-email-page',
  templateUrl: 'email-page.html'
})
export class EmailPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPagePage');
  }
gotopassword(){
  this.navCtrl.push(PasswordPagePage);
}
}
