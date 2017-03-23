import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalService {
  public userSignUp_url : string = "http://sikkh.com/ws/signup/user";
  public userConfirmCode_url : string = "http://sikkh.com/ws/confirm/user";
  public driverSignUp_url : string = "http://sikkh.com/ws/signup/driver";
  public driverConfirmCode_url : string = "http://sikkh.com/ws/confirm/driver" ;
  public userLogin_url : string = "http://sikkh.com/ws/login/user";
  public driverLogin_url : string = "http://sikkh.com/ws/login/driver";
  
  constructor(public http: Http) {
    console.log('Hello GlobalService Provider');
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

}
