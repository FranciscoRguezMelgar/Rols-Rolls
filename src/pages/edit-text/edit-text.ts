import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Text } from '../../model/Text'
import { AlertController } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EditTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-edit-text',
	templateUrl: 'edit-text.html',
})
export class EditTextPage {
	public text: Text;
	public create: boolean;
	public changed: boolean = false;
	static readonly emptyText = new Text("", "", false);
	public old: Text;
	constructor(public psc: PersistComp, public navCtrl: NavController, public navParams: NavParams, public ac: AlertController, public ts:ToastController) {
		this.create = this.navParams.get('create')
		//Es la creación de un texto
		if(this.create){
			//Creo el texto vacío.
			this.text = new Text("", "", false)
			//Lo meto en el grupo
			if (!this.psc.currentGroup.texts)
				this.psc.currentGroup.texts = [];

			//ya hemos creado el texto
			return;
		}
		this.text = navParams.get('text');
		this.old = JSON.parse(JSON.stringify(this.text))
		this.text = this.psc.currentGroup.texts.filter(res => this.text === res)[0];
	}
	save(message1:string){
		//Como el objeto this.text es una referencia al que hay en el objeto, con actualizar el objeto debería valer.
		if(this.create){
			this.psc.currentGroup.texts.push(this.text);
			this.create = false;
		}

		this.psc.updateGroup().then(
			data=>{
				this.text = this.psc.currentGroup.texts.filter(
					res => {
						var aux = new Text(res.content, res.title, res.visible);
						console.log('aux: ' + JSON.stringify(aux))
						console.log('this.text: ' + JSON.stringify(this.text))
						console.log(aux.equalsTo(this.text))
						return aux.equalsTo(this.text);
					}
				)[0];
				this.changed = false;
				let toast = this.ts.create({
					message: message1,
					duration: 3000,
					position: 'middle',
				});
				toast.present()
			}
		).catch()
		
	}
	open(){
		//Esto abrirá un archivo de texto, que no sé si lo implementaremos.
	}
	discard(){
		this.text.content = this.old.content;
		this.text.title = this.old.title;
		this.save("Texto descartado");
	}

	ionViewDidLoad() {
		//console.log('ionViewDidLoad EditTextPage');
	}


	ionViewWillLeave(){
		var a = this.ac.create({
			title:'Hay cambios sin guardar, ¿qué quieres hacer?',
			inputs: [],
			buttons: [
				{
					text: "Descartar",
					role: "cancel",
					handler: data => {
						this.discard();
					}
				},
				{
					text: 'Guardar',
					handler: data => {
						this.save("Texto Guardado");
					}
				}
			]
		});
		if(this.changed)
			a.present();
		

	}

}
/*




*/