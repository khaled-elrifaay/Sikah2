import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService } from '../../providers/global-service';
import { NgForm } from '@angular/forms';
import { CustomToast } from '../../general-components/toast.component';
import {Home} from "../home/home";
import {BeforeSignupPage} from "../before-signup/before-signup";

/*
  Generated class for the ActiveCodePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-active-code-page',
  templateUrl: 'active-code-page.html'
})
export class ActiveCodePagePage {
  private res ;
  public BeforeSignupPage = BeforeSignupPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private globalService :GlobalService ,
              private customToast : CustomToast) {
    this.res = navParams.data;
    console.log(this.res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveCodePagePage');
  }
  userConfirmation(code)
  {
    // driver 1
    // user 0
     if(this.res.type == 0)
     {
        this.userConfirm(code);
     }
     else
     {
        this.driverConfirm(code);
     }

  }

  userConfirm(code)
  {
      return this.globalService.userConfirmCode(this.res.user.userid,code).subscribe(
       (res) => {
         if(res.confirm == 1)
         {
             this.globalService.setUser(res);
             this.navCtrl.setRoot(Home);
         }
         else
         {
            console.log(res.error);
            this.customToast.toast(res.error);
         }
          
       }
     );
  }
  driverConfirm(code)
  {
    return this.globalService.driverConfirmCode(this.res.driver.driversid,code).subscribe(
       (res) => {
         if(res.confirm == 1)
         {
             this.globalService.setUser(res);
             this.navCtrl.setRoot(Home);
         }
         else
         {
            console.log(res.error);
            this.customToast.toast(res.error);
         }
          
       }
     );
  }
  userResendCode()
  {
    this.globalService.userResendCode(this.res.user).subscribe(
      (res)=>{
        this.customToast.toast('Code Is Sent');
        console.log(res);
      }
    );
  }
  driverResendCode()
  {
    this.globalService.driverResendCode(this.res.driver).subscribe(
      (res)=>{
        this.customToast.toast('Code Is Sent');
        console.log(res);
      }
    );
  }
  resendCode()
  {
    if(this.res.type == BeforeSignupPage.userType)
    {
      this.userResendCode();
    }
    else
    {
      this.driverResendCode();
    }
  }
  
}
