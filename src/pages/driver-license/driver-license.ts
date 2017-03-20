import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverCarPage} from "../driver-car/driver-car";

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

  public pushPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pushPage = DriverCarPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverLicensePage');
  }

}
