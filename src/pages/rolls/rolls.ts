import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'

import { EditRollPage } from '../../pages/edit-roll/edit-roll'


import { Roll } from '../../model/Roll'
/**
 * Generated class for the RollsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-rolls',
	templateUrl: 'rolls.html',
})
export class RollsPage {
	public rolls: Array<Roll>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public psc:PersistComp) {
		if (!this.psc.currentGroup.rolls){
			this.psc.currentGroup.rolls = [] as Array<Roll>;
		}
	}
	create(){
		this.navCtrl.push(EditRollPage);
	}
	edit(r:Roll){
		this.navCtrl.push(EditRollPage, {roll:r});
	}
	delete(r:Roll){
		var a = this.psc.currentGroup.rolls.indexOf(r);
		this.psc.currentGroup.rolls.splice(a, 1);
		this.psc.updateGroup();
	}
	roll(){
		//Ahora lo vemos que esto es un poco diferente
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad RollsPage');
	}

}
