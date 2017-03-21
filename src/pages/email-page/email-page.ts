import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PasswordPagePage} from '../password-page/password-page';
import {Arrived} from "../arrived/arrived";
import {NgForm} from "@angular/forms";

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
  public pushPage;
  public user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = PasswordPagePage;
    this.user = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPagePage');
  }
  addEmail(f : NgForm)
  {
    this.user.email = f.value.email;
    this.navCtrl.push(this.pushPage,this.user);
  }
/*gotopassword(){
  this.navCtrl.push(Arrived);
}*/
}
