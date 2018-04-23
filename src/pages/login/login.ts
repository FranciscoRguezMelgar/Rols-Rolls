import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account'
import {GroupsPage} from '../groups/groups'
import { PersistComp } from '../../logic/PersistComp'
import { Player } from '../../model/Player'
import {Observable} from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	public createAccountPage = CreateAccountPage;
	public groupsPage = GroupsPage;
	public email:string;
	public password:string;
	public confirm:string;
	public sus:Subscription;
	public p: Player = {key:"", nick:"", uid:""};

	constructor(public navCtrl: NavController, public navParams: NavParams, public ts:ToastController, public psc:PersistComp) {

	}


	login(){
		var user = this.psc.login(this.email, this.password)
		if ( user === null){
			console.log("El user el nulo.")
			let toast = this.ts.create({
			message: 'La contraseña o el usuario son incorrectos',
			duration: 3000,
			position: 'middle',
			});
			toast.present()
		}else{			
			user.then(
				(value)=>{				
					console.log('Lo que me da el then es: ' + JSON.stringify(value))															
					this.sus = this.psc.playersRef$.snapshotChanges().map(
						data => {
							console.log("hola")
							data.filter(data => data.payload.val().uid === value.uid).map(
								el => {
									console.log("Hemos encontrado un jugador")
									this.navCtrl.setRoot(this.groupsPage)
									this.psc.thisPlayer = { key: el.key, ...el.payload.val() } as Player;
								}
							)
						}
					).subscribe()
				}
			).catch(
				(value)=>{
					let toast = this.ts.create({
					message: 'La contraseña o el usuario son incorrectos',
					duration: 3000,
					position: 'middle',
					});
					toast.present()
				});
			}
		}
	

	

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}
	ionViewDidLeave(){
		if (this.sus)
			this.sus.unsubscribe();


	}
}


