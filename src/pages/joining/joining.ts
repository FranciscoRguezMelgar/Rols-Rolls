import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
//import { ThenableReference } from '@firebase/database-types'
import { MainMenuPage } from '../main-menu/main-menu'
import { Subscription } from 'rxjs/Subscription';
import { Group } from '../../model/Group'
/**
 * Generated class for the JoiningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-joining',
	templateUrl: 'joining.html',
})
export class JoiningPage {	
	
	public group: Group;
	public players$;/*Observable<>*/
	public sus:Subscription;
	constructor(public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
		/*var key:string = this.navParams.get('group');		
		this.psc.currentGroup = this.psc.getGroups().snapshotChanges().map(
			data => {
				return data.filter(el => el.key === key).map(coso => {
					return{ key: coso.key, ...coso.payload.val() } as Group;
				});
			}
		);
		this.players$ = this.psc.getGroups().snapshotChanges()
		.map(
			data => {
				return data.filter(
					element=>{
						console.log("Buscando el grupo que se ha creado")
						return ( { key: element.key, ...element.payload.val() } as Group).key === key;
					}
				).map(
					thingy=>{
						console.log("Se ha encontrado el grupo recién creado y es: " + JSON.stringify(({ key: thingy.key, ...thingy.payload.val() } as Group).members))
						return ( { key: thingy.key,... thingy.payload.val() } as Group).members;
					}
				)
			}
		);*/
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad JoiningPage');
		console.log('El nombre del grupo va a ser: '+JSON.stringify(this.group));
	}
	ionViewDidLeave(){
		if(this.sus)
			this.sus.unsubscribe()
	}
	goToMainMenu(){
		//Tenemos que cerrar el grupo para que no salga en la lista de los jugadores que entren.
		//this.psc.currentGroup.open = false;		
		this.psc.updateGroup();
		this.navCtrl.setRoot(MainMenuPage)
	}

}