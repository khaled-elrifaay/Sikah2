import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController} from 'ionic-angular';
import {ActiveCodePagePage} from "../active-code-page/active-code-page";
import {GlobalService} from "../../providers/global-service";

import { CustomToast } from '../../general-components/toast.component';
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
              private globalService : GlobalService,
              private customToast : CustomToast ,
              private loadingCtrl : LoadingController) {
        this.user = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePagePage');
  }
  gotoactivecode(){
    // 1  for driver
    // 0 for user
    this.presentLoad();
    if(this.user.type == 0)
    {
        this.globalService.userSignUp(this.user).subscribe(
        (user)=>{
          if(user.userid)
          {
            this.navCtrl.push(ActiveCodePagePage,{user:user,type:0});
          } 
          else
          {
            this.customToast.toast(user.error);
          }
        }
      );
    }
    else{
      this.globalService.driverSignUp(this.user).subscribe(
        (driver)=>{
          if(driver.driversid)
          {
            this.navCtrl.push(ActiveCodePagePage,{driver:driver,type:1});
          } 
          else
          {
            this.customToast.toast(driver.error);
          }
        }
      );
    }
       
  }
  presentLoad()
  {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 750
    });
    loader.present();
  }
}
