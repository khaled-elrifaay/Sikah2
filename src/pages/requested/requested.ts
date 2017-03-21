import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-requested',
  templateUrl: 'requested.html'
})
export class Requested {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
	  	
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });
    confirm.present();
  }  

}
