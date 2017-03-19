import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { NavController } from 'ionic-angular';
import {BeforeSignupPage} from "../before-signup/before-signup";

@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html'
})
export class Lang {
  constructor(public navCtrl: NavController,public translate: TranslateService) {
    //translate.setDefaultLang('en');
  }

setDefault(language){
    this.translate.setDefaultLang(language);
    this.navCtrl.push(BeforeSignupPage);
    console.log("make it arabic");
}

}
