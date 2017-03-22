import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActiveCodePagePage} from "../active-code-page/active-code-page";
import {DriverCarLicensePage} from "../driver-car-license/driver-car-license";

/*
  Generated class for the DriverCar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver-car',
  templateUrl: 'driver-car.html'
})
export class DriverCarPage {
  public pushPage;
  public user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    this.pushPage = DriverCarLicensePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverCarPage');
  }

}
