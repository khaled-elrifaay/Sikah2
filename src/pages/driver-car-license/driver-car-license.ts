import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobilePagePage} from "../mobile-page/mobile-page";

/*
  Generated class for the DriverCarLicense page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-driver-car-license',
  templateUrl: 'driver-car-license.html'
})
export class DriverCarLicensePage {
  public pushPage;
  public user ;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.user = navParams.data;
    this.pushPage = MobilePagePage;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverCarLicensePage');
  }

}
