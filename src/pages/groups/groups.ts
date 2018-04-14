import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BtComp } from '../../logic/btComp';

/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
	public devices = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public btc:BtComp) {
  }

  buscar(){
  	this.btc.search(this.devices);
  }
  setVisible(){
  	this.btc.setVisible()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

}
