import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverLicensePage} from '../driver-license/driver-license';
/*
  Generated class for the DriverId page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver-id',
  templateUrl: 'driver-id.html'
})
export class DriverIdPage {
  public pushPage;
  public user ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    console.log(this.user);
    this.pushPage = DriverLicensePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverIdPage');
  }

}
