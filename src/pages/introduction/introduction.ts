import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the IntroductionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public splashScreen: SplashScreen) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPag');
  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      setTimeout(()=>{
        this.splashScreen.hide();
      }, 500);
    });
  }
  public navHome  = () =>{
   this.navCtrl.setRoot(LoginPage, false, {animate: true});
  }

}
