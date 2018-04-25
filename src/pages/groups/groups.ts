import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from "../../logic/PersistComp"
import { Observable } from 'rxjs/Observable';
import { Group } from "../../model/Group"
//import { Player } from "../../model/Player"

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
		console.log('ionViewDidLoad GroupsPage');
		//console.log("Este es el current player: "+JSON.stringify(this.psc.thisPlayer))
		this.groups$ = this.psc.groupsRef$.snapshotChanges().map(
			list => {				
				return list.filter(response=>response.payload.val().members[0].uid === this.psc.thisPlayer.uid).map(
					element=>{
						return {key:element.key,...element.payload.val()} as Group
					}
				)
			}
		)
	}
	goToMainMenu(group:Group){
		//TODO: hacer que vaya al menú principal y que funcionen las cosas.
		//es muy recomendable que pongamos un current group para referenciarlo rápidamente
		//no hay que olvidarse de hacer updates para que los cambios se guarden.
		
		this.psc.currentGroupSus = this.psc.groupsRef$.snapshotChanges().map(
			list => {
				list.filter(el => el.key === group.key).map(
					element => {
						console.log("Ha habido cambios en el grupo y ha saltado el subscribe")
						this.psc.currentGroup = { key: element, ...element.payload.val() } as Group;

					}
				)
		}).subscribe();
		this.navCtrl.setRoot(MainMenuPage)
		
	}
	ionViewDidLeave(){

	}

}//fin de la clase