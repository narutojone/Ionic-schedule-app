import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAdvertisementPage } from './create-advertisement';

@NgModule({
  declarations: [
    CreateAdvertisementPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAdvertisementPage),
  ],
  exports: [
    CreateAdvertisementPage
  ]
})
export class CreateAdvertisementPageModule {}
