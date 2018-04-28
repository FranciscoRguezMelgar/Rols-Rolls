import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupManagementPage } from './group-management';

@NgModule({
  declarations: [
    GroupManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupManagementPage),
  ],
})
export class GroupManagementPageModule {}
