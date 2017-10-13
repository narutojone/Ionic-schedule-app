import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  public isClient: boolean;
  public enableNotif: boolean;
  public inteligenFollow: boolean;
  public geoLocalization: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _event: Events) {
  }

  public logout = () => {
    this._event.publish('user:logout');
  }
  public UIpdate = (isClient) => {
    this._event.publish('user:client', isClient);
  } 
}
