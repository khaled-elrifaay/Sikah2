import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverCarLicensePage} from "../driver-car-license/driver-car-license";
import { Camera } from 'ionic-native';
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
  public car_front : string ;
  public car_back : string ;
  readonly front = 1 ;
  readonly back = 0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    this.pushPage = DriverCarLicensePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverCarPage');
  }

  takeFrontImage()
  {
    this.takePicture(this.front);
  }
  takeBackImage()
  {
    this.takePicture(this.back);
  }


  takePicture(type : any){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      if(type == this.front)
      {
        this.car_front = "data:image/jpeg;base64," + imageData;
        this.user.car_front = imageData;
      }
      else
      {
        this.car_back = "data:image/jpeg;base64," + imageData;
        this.user.car_back = imageData;
      }

    }, (err) => {
      console.log(err);
    });
  }

}
