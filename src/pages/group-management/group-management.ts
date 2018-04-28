import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { Player } from '../../model/Player'
/**
 * Generated class for the GroupManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-group-management',
	templateUrl: 'group-management.html',
})
export class GroupManagementPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
		this.psc.currentGroup.open = true;
		this.psc.updateGroup();
		
	}
	goToMainMenu(){
		this.navCtrl.pop();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GroupManagementPage');
	}
	ionViewWillLeave(){
		this.psc.currentGroup.open = false;
		this.psc.updateGroup();
	}
	removeMember(p: Player) {
		var index: number = this.psc.currentGroup.members.indexOf(p);
		this.psc.currentGroup.members.splice(index);
		this.psc.updateGroup();
	}


}
