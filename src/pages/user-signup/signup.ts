import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';
import {EmailPagePage} from '../email-page/email-page';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public user = {
    first_name : null,
    last_name : null ,
    mobile : null ,
    email : null ,
    password : null
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
gotoemail(f : NgForm){
  this.user.first_name = f.value.firstname;
  this.user.last_name = f.value.lastname;
  this.navCtrl.push(EmailPagePage,this.user);
}
}
