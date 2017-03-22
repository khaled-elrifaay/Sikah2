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
  public user = {
    first_name : null,
    last_name : null ,
    mobile : null ,
    email : null ,
    password : null,
    type : null,
    id_front : null,
    id_back : null ,
    licence_front : null,
    licence_back : null,
    car_front : null ,
    car_back : null
  };
  readonly driverType = 1;
  readonly userType = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeforeSignupPage');
  }
gotousersign(type:boolean){
  this.user.type = type;
  this.navCtrl.push(BeforeLoginPage,this.user);
}
/*
goToDrioverSign(){
  this.navCtrl.push(DriverNamePage);
}
*/

}
