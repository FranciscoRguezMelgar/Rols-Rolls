import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { AlertController } from 'ionic-angular';


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
	public pushed = true;
	constructor(public ac: AlertController, public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
		if (!this.psc.currentGroup.rolls) {
			this.psc.currentGroup.rolls = [] as Array<Roll>;
		}
		var roll:Roll = this.navParams.get('roll');
		if(roll === undefined){
			console.log("Es una creación de tirada")
			this.pushed = false;
			this.roll = new Roll("",[]);			
		}else{
			this.roll = new Roll(roll.name, roll.dice as Dice[]);
			this.save();
		}
		
	}
	save(){
		if(this.roll.name.localeCompare("")===0){
			this.roll.name = "Sin título"
		}
		if(!this.pushed){
			this.psc.currentGroup.rolls.push(this.roll);
			this.pushed = true;
		}
			this.psc.updateGroup().then(
				el=>{
					this.roll = this.psc.currentGroup.rolls.find(el => {						
						console.log("this.roll:\t" + JSON.stringify(this.roll))
						console.log("el:\t\t" + JSON.stringify(el))						
						return new Roll(this.roll.name, this.roll.dice).equals(new Roll(el.name, el.dice));
						});
				}
			)
	}
	addDice(){
		var a = this.ac.create({
			title: '¿De cuántas caras quieres el nuevo dado?',
			inputs: [
				{
					name:"faces",
					type:"number",
					placeholder:"Número de caras"
				}
			],
			buttons: [
				{
					text: "Descartar",
					role: "cancel",
					handler: data => {
						console.log("Cancelada adición de dado")
					}
				},
				{
					text: 'Guardar',
					handler: data => {
						this.roll.dice.push(new Dice(data.faces as number));
						this.save();
					}
				}
			]
		});	
		a.present();
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad EditRollPage');
	}
	ionViewWillLeave(){
		this.save();
	}

}
