import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverCarPage} from "../driver-car/driver-car";
import { CustomToast} from "../../general-components/toast.component";
/*
  Generated class for the DriverLicense page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver-license',
  templateUrl: 'driver-license.html'
})
export class DriverLicensePage {
  public user;
  public pushPage;
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private customToast : CustomToast) {
    this.user = navParams.data;
    this.pushPage = DriverCarPage;
    customToast.toast(this.user.id_front);
    customToast.toast(this.user.id_front);
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverLicensePage');
  }

}
