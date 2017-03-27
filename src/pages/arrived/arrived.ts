import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {GlobalService} from "../../providers/global-service";

@Component({
  selector: 'page-arrived',
  templateUrl: 'arrived.html'
})
export class Arrived {
public user;
  constructor(public navCtrl: NavController , private globalService : GlobalService) {
    this.user = this.globalService.user;
    console.log(this.user);
  }

}
