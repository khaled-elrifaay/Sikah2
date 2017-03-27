import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverLicensePage} from '../driver-license/driver-license';
import { Camera } from 'ionic-native';
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
  public id_front : string ;
  public id_back : string ;
  readonly front = 1 ;
  readonly back = 0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    console.log(this.user);
    this.pushPage = DriverLicensePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverIdPage');
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
          this.id_front = "data:image/jpeg;base64," + imageData;
          this.user.id_front = imageData;
        }
        else
        {
          this.id_back = "data:image/jpeg;base64," + imageData;
          this.user.id_back = imageData;
        }
        
    }, (err) => {
        console.log(err);
    });
  }

}
