import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Player} from '../../model/Player'
import { PersistComp } from '../../logic/PersistComp'
/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
	public password:string
	public email:string;
	public confirmation:string;
	public username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public psc:PersistComp, public ts:ToastController) {
  }

  createAccount(){
  	if(this.confirmation !== this.password)
  	{
		let toast = this.ts.create({
		message: 'La contraseña y la confirmación no son iguales.',
		duration: 3000,
		position: 'middle',
		});
		toast.present()
		return;
  	}
  	var res = this.psc.createAccount(this.email, this.password)
  	if(res === null){
		let toast = this.ts.create({
		message: 'Ha habido un error',
		duration: 3000,
		position: 'middle',
		});
		toast.present()
		return;
  	}
  	res.then(
  		(value)=>{//crear cuenta exitoso
  			console.log(value.uid)
  			this.psc.playersRef$.push(new Player(this.username, value.uid))
  			this.navCtrl.pop()
  		}
	).catch(
		(value)=>{
			let toast = this.ts.create({
			message: 'Ha habido un error: '+value.message,
			duration: 3000,
			position: 'middle',
			});
			toast.present()
		}
	);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
  	}





