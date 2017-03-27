import { Injectable } from '@angular/core';
import { ToastController} from 'ionic-angular';
@Injectable()
export class CustomToast{
    constructor( private toastCtrl : ToastController ) {
  }
  public toast(txt: string)
  {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 3000
    });
    toast.present();
  }
}