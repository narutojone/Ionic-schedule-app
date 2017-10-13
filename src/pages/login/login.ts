import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecoveryPage } from '../recovery/recovery';
import { RegistrerPage } from '../registrer/registrer';
import { ProductsPage } from '../products/products';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goProducts = () => {    
    this.navCtrl.push(ProductsPage, null, {animate: true});  
  }

  createAccount = () => {
    this.navCtrl.push(RegistrerPage, {animate: true});
  }

  forgotPass = () => {
    this.navCtrl.push(RecoveryPage, {animate: true});
  }

}
