import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from "../../logic/PersistComp"
import { Observable } from 'rxjs/Observable';
import { Group } from "../../model/Group"

import { CreateGroupPage } from '../create-group/create-group';
import { MainMenuPage } from '../main-menu/main-menu';


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
	public groups$:Observable<any[]>;
	constructor(
	public navCtrl: NavController,
	public navParams: NavParams,
	public psc:PersistComp){		
	}



	ionViewDidLoad() {
//		alert("APlicación cargada")
		console.log('ionViewDidLoad GroupsPage');
		console.log("Este es el current player: "+JSON.stringify(this.psc.thisPlayer))
		this.groups$ = this.psc.getGroups().snapshotChanges().map(
			list=>{
				return list.filter( el=> {
					console.log((el.payload.val() as Group).members[0].uid === this.psc.thisPlayer.uid)
					console.log(JSON.stringify(el.payload.val() as Group))
					return (el.payload.val() as Group).members[0].uid === this.psc.thisPlayer.uid;					
				}).map(
					(el)=>{
						return {key: el.key, ...el.payload.val()} as Group;
					}
				);
			}
		)
	}
	goToMainMenu(group:Group){
		//TODO: hacer que vaya al menú principal y que funcionen las cosas.
		//es muy recomendable que pongamos un current group para referenciarlo rápidamente
		//no hay que olvidarse de hacer updates para que los cambios se guarden.
		this.psc.currentGroup = group;
		this.navCtrl.setRoot(MainMenuPage)
	}

}//fin de la clase