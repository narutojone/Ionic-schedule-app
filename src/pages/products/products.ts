import { Constants } from './../../_helpers/constants.controller';
import { Localstorage } from './../../_helpers/localstorage.controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from './../home/home';


@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private lStorage: Localstorage, private _constants: Constants) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  public throwTopicPage(num) {
  
    this.lStorage.addItemToUserForm('type', num, (res) =>{
      console.log('res ', res);
      this.navCtrl.setRoot(HomePage, res, {animate: true});
    });
    
  }
}
