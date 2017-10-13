import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigAdvertisementPage } from './config-advertisement';

@NgModule({
  declarations: [
    ConfigAdvertisementPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigAdvertisementPage),
  ],
  exports: [
    ConfigAdvertisementPage
  ]
})
export class ConfigAdvertisementPageModule {}
