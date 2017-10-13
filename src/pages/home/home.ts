import { ProductsPage } from './../products/products';
import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Tabs, Tab  } from 'ionic-angular';
import { AdvertisementPage } from './../advertisement/advertisement';
import { NotificationPage } from './../notification/notification';
import { TextingPage } from '../../pages/texting/texting';
import { ProfilePage } from '../../pages/profile/profile';
import { StatisticsPage } from './../statistics/statistics';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tab1Root: any = NotificationPage;
  public tab2Root: any = TextingPage;
  public tab3Root: any = AdvertisementPage;
  public tab4Root: any = StatisticsPage;
  public tab7Root: any = ProfilePage;
  
  public tab6Root: any = AdvertisementPage;
  public tab5Root: any = ProductsPage;

  public isClient: boolean = false;
  @ViewChild('appTabs')  tabsRef: Tabs;
  @ViewChild('tab3')  tabRef3: Tab;
  @ViewChild('tab4')  tabRef4: Tab;
  @ViewChild('tab5')  tabRef5: Tab;
  @ViewChild('tab6')  tabRef6: Tab;

  constructor(public navCtrl: NavController, private _event: Events) {
    _event.subscribe('user:client', (isClient) =>{
      this.isClient = isClient;
      if(isClient) {
        this.setClientMode();
      } else {
        this.setSellerMode();
      }
    });
  }

  private setClientMode = () =>{
    this.isClient = true;   
    
  }

  private setSellerMode = () => {
    this.isClient = false;
  }

}
