import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalService} from '../../providers/global-service';
import { NgForm} from '@angular/forms';
/*
  Generated class for the ActiveCodePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-active-code-page',
  templateUrl: 'active-code-page.html'
})
export class ActiveCodePagePage {
  private user ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private globalService :GlobalService ) {
    this.user = navParams.data;
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActiveCodePagePage');
  }
  userConfirmation(code)
  {
     return this.globalService.userConfirmCode(this.user.userid,code).subscribe(
       (res) => {
          console.log(res);
       }
     );
  }
  
}
