import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalService {
    public loggedIn: boolean = false;
    public user: any;

  public userSignUp_url : string = "http://sikkh.com/ws/signup/user";
  public userConfirmCode_url : string = "http://sikkh.com/ws/confirm/user";
  public driverSignUp_url : string = "http://sikkh.com/ws/signup/driver";
  public driverConfirmCode_url : string = "http://sikkh.com/ws/confirm/driver" ;
  public userLogin_url : string = "http://sikkh.com/ws/login/user";
  public driverLogin_url : string = "http://sikkh.com/ws/login/driver";
  public userResendCode_url : string ="http://sikkh.com/ws/resend/code";
  public driverResendCode_url :string = "http://sikkh.com/ws/resend/driver";
  
  constructor(public http: Http,public storage: Storage,) {
    console.log('Hello GlobalService Provider');

  }
    userResendCode(user :any)
    {
        return this.http.post(this.userResendCode_url,user).map((res) => res.json());
    }
    driverResendCode(driver :any)
    {
        return this.http.post(this.driverResendCode_url,driver).map((res) => res.json());
    }
    userLogin(user: any)
    {
        return this.http.post(this.userLogin_url,user).map((res) => res.json());
    }
    driverLogin(driver: any)
    {
        return this.http.post(this.driverLogin_url,driver).map((res) => res.json());
    }
    userSignUp(user: any)
    {
       return this.http.post(this.userSignUp_url,user).map((res) => res.json());
    }
    driverSignUp(driver:any)
    {
       return this.http.post(this.driverSignUp_url,driver).map((res) => res.json());
    }
    driverConfirmCode(driversid: any,code: any)
    {
      var driverData = {
          code : code,
          driversid : driversid
      };
      return this.http.post(this.driverConfirmCode_url,driverData).map((res) => res.json());
    }
    userConfirmCode(userid: any,code: any)
    {
          var userData = {
              code : code,
              userid : userid
    };
  return this.http.post(this.userConfirmCode_url,userData).map((res) => res.json());
}
    setUser(user: any) {
        this.loggedIn = true;
        this.storage.set("USERKey", JSON.stringify(user));
        this.user = user;
        console.log(user);

    }

    getUser() {
        return this.storage.get("USERKey");
    }
    logout() {
        this.loggedIn = false;
        this.storage.set("USERKey", null);
    }

}
