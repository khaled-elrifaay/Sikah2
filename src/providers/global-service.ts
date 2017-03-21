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
  
  constructor(public http: Http) {
    console.log('Hello GlobalService Provider');
  }

 userSignUp(user: any)
 {
   return this.http.post(this.userSignUp_url,user).map((res) => res.json());
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
