import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ActiveCodePagePage} from "../active-code-page/active-code-page";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushPage = ActiveCodePagePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverCarPage');
  }

}
