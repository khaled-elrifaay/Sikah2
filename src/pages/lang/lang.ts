import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {NavController, LoadingController} from 'ionic-angular';
import {BeforeSignupPage} from "../before-signup/before-signup";
import {GlobalService} from "../../providers/global-service";
import {Home} from "../home/home";

@Component({
  selector: 'page-lang',
  templateUrl: 'lang.html'
})
export class Lang {
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public translate: TranslateService,private globalService : GlobalService) {
    //translate.setDefaultLang('en');
      if (globalService.user == null) {
          let loader = this.loadingCtrl.create({});
          loader.present();
          this.globalService.getUser()
              .then(
                  data => {
                      let user = JSON.parse(data);
                      // console.log(data);
                      if (JSON.stringify(user) != "" && data != null) {
                          this.globalService.setUser(user);
                          this.globalService.loggedIn = true;
                          this.navCtrl.setRoot(Home);
                      }
/*
                      this.defLanguage();
*/
                      loader.dismissAll();
                  }
              );
      }
  }

setDefault(language){
    this.translate.setDefaultLang(language);
    this.navCtrl.push(BeforeSignupPage);
    console.log("make it arabic");
}

}
