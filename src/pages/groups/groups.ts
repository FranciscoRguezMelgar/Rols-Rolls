import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BtComp } from '../../logic/BtComp';
import { PersistComp } from "../../logic/PersistComp"

import { Group } from "../../model/Group"

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
	public groupsList:Array<Group> = []
	constructor(public navCtrl: NavController, public navParams: NavParams, public btc:BtComp, public psc:PersistComp) {
	}
	ionViewDidLoad() {
//		alert("APlicación cargada")
		console.log('ionViewDidLoad GroupsPage');
		this.psc.getGroups(this.groupsList);
  	}

}
