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
		var key:string = this.navParams.get('group');		
		this.psc.currentGroupSus = this.psc.getGroups().snapshotChanges().map(
			list => {
				list.filter(predicate => predicate.key === key).map(
					el=>{
						this.psc.currentGroup = { key: el.key, ...el.payload.val() } as Group;
						console.log("Se ha modificado un grupo a=> ")
						console.log(JSON.stringify(this.psc.currentGroup))
						this.players$ = this.psc.currentGroup.members;
					}
				)
			}
		).subscribe();
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
		this.psc.currentGroup.open = false;		
		this.psc.updateGroup();
		this.navCtrl.setRoot(MainMenuPage)
	}

}