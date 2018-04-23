import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTextPage } from './edit-text';

@NgModule({
  declarations: [
    EditTextPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTextPage),
  ],
})
export class EditTextPageModule {}
