import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DriverCarPage} from "../driver-car/driver-car";
import { Camera } from 'ionic-native';

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
  public licence_front : string ;
  public licence_back : string ;
  readonly front = 1 ;
  readonly back = 0 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    this.pushPage = DriverCarPage;
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverLicensePage');
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
                this.licence_front = "data:image/jpeg;base64," + imageData;
                this.user.licence_front = imageData;
            }
            else
            {
                this.licence_back = "data:image/jpeg;base64," + imageData;
                this.user.licence_back = imageData;
            }

        }, (err) => {
            console.log(err);
        });
    }

}
