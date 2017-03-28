import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl : AlertController) {
    this.user = navParams.data;
    this.pushPage = DriverCarLicensePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverCarPage');
  }

  takeFrontImage()
  {
   // this.takePicture(this.front);
   this.galleryOrCamera(this.front);
  }
  takeBackImage()
  {
    //this.takePicture(this.back);
   this.galleryOrCamera(this.back); 
  }
  galleryOrCamera(type:any) {
    let confirm = this.alertCtrl.create({
      title:  'Choose method',
      message: 'Choose picture from gallery or camera ?',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {
            this.pickPicture(type);
          }
        },
        {
          text: 'Camera',
          handler: () => {
            this.takePicture(type);
          }
        }
      ]
    });
    confirm.present();
  }
  pickPicture(type:any) {
    //noinspection TypeScriptUnresolvedVariable
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.image_accommodation(type,imageData);
    }, (err) => {
      console.log(err);
    });
  }
  takePicture(type : any){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.image_accommodation(type,imageData);
    }, (err) => {
        console.log(err);
    });
  }
  image_accommodation(type:any,imageData:any)
  {
      if(type == this.front)
        {
          this.car_front = "data:image/jpeg;base64," + imageData;
          this.user.id_front = imageData;
        }
        else
        {
          this.car_back = "data:image/jpeg;base64," + imageData;
          this.user.id_back = imageData;
        }
  }

}
