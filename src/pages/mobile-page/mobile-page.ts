import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActiveCodePagePage} from "../active-code-page/active-code-page";
import {GlobalService} from "../../providers/global-service";
/*
  Generated class for the MobilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mobile-page',
  templateUrl: 'mobile-page.html'
})
export class MobilePagePage {
  public user;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private globalService : GlobalService) {
        this.user = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePagePage');
  }
  gotoactivecode(){
    this.globalService.userSignUp(this.user).subscribe(
      (user)=>{
        this.navCtrl.push(ActiveCodePagePage,user); 
      }
    );   
  }
}
