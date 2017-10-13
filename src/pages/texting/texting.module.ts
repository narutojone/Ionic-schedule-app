import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextingPage } from './texting';

@NgModule({
  declarations: [
    TextingPage,
  ],
  imports: [
    IonicPageModule.forChild(TextingPage),
  ],
  exports: [
    TextingPage
  ]
})
export class TextingPageModule {}
