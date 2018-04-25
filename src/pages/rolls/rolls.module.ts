import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RollsPage } from './rolls';

@NgModule({
  declarations: [
    RollsPage,
  ],
  imports: [
    IonicPageModule.forChild(RollsPage),
  ],
})
export class RollsPageModule {}
