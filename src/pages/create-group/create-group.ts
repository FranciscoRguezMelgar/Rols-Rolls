import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JoiningPage } from '../joining/joining';
import { PersistComp } from "../../logic/PersistComp"

/**
 * Generated class for the CreateGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {
  public groupName:string = "";
  public JoiningPage = JoiningPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public psc:PersistComp) {}
  goToJoin(){
    this.navCtrl.setRoot(JoiningPage, {groupName:this.groupName})

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

}
