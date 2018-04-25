import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { AlertController } from 'ionic-angular';

import { EditRollPage } from '../../pages/edit-roll/edit-roll'


import { Roll } from '../../model/Roll'
import { Dice } from '../../model/Dice'
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
	constructor(public ac: AlertController, public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
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
		console.log("A: " + JSON.stringify(a))
		this.psc.currentGroup.rolls.splice(a, 1);
		this.psc.updateGroup();
	}
	
	doRoll(r: Roll) {
		var aux = [];
		r.dice.forEach(
			el => {
				aux.push(new Dice(el.faces));
			}
		)
		var result = new Roll(r.name, aux).roll();
		var mensaje = "<table> <th>Dado</th><th>Resultado</th>";
		for (var ii = 0; ii < result.length; ii++){
			mensaje += "<tr><td><strong>" + r.dice[ii].faces + "</strong> </td><td>" + result[ii] + '</td></tr>';
		}
		mensaje +='</table>'
		var a = this.ac.create({
			title: 'El resultado ha sido:',
			message:mensaje,
			cssClass:"tabl",
			inputs: [
			],
			buttons: [
				{
					text: "Aceptar",					
				},
			]
		});
		a.present();
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad RollsPage');
	}

}
