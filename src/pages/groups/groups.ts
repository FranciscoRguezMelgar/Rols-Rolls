import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from "../../logic/PersistComp"

import { Group } from "../../model/Group"

import { CreateGroupPage } from '../create-group/create-group';


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
	public CreateGroupPage = CreateGroupPage;
	public groups$;
	constructor(
	public navCtrl: NavController,
	public navParams: NavParams,
	public psc:PersistComp){
				this.groups$ = this.psc.getGroups().snapshotChanges().map(
			(list)=>{
				return list.map(
					(coso)=>{
						return coso.payload.val()
					}
				)
			}
		)
		
	}



	ionViewDidLoad() {
//		alert("APlicación cargada")
		console.log('ionViewDidLoad GroupsPage');
  	}

}
