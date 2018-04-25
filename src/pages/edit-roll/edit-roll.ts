import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Roll } from '../../model/Roll'
import { Dice } from '../../model/Dice'

/**
 * Generated class for the EditRollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-edit-roll',
	templateUrl: 'edit-roll.html',
})
export class EditRollPage {
	public roll:Roll;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.roll = this.navParams.get('roll');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditRollPage');
	}

}
