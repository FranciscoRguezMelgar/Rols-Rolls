import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Text } from '../../model/Text'
import { AlertController } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
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
	constructor(public psc: PersistComp, public navCtrl: NavController, public navParams: NavParams, public ac: AlertController) {
		this.create = this.navParams.get('create')
		//Es la creación de un texto
		if(this.create){
			//Creo el texto vacío.
			this.text = new Text("", "", false)
			//Lo meto en el grupo
			if (!this.psc.currentGroup.texts) this.psc.currentGroup.texts = [];
			this.psc.currentGroup.texts.push(this.text);
			//recupero la referencia al texto
			this.text = this.psc.currentGroup.texts.filter(res => this.text === res)[0];
			//ya hemos creado el texto
			this.create = !this.create;			
			return;
		}
		this.text = navParams.get('text');
		this.text = this.psc.currentGroup.texts.filter(res => this.text === res)[0];		
	}
	save(){
		//Como el objeto this.text es una referencia al que hay en el objeto, con actualizar el objeto debería valer.
		this.psc.updateGroup()
	}
	open(){
		//Esto abrirá un archivo de texto, que no sé si lo implementaremos.
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditTextPage');
	}

	ionViewWillLeave(){
		let alert = this.ac.create({
			title: 'Datos nuevos',
			inputs: [
				/*{
					name: 'nombre',
					placeholder: 'Adrián',
					value: con.nombre
				},
				{
					name: 'organizacion',
					placeholder: 'Corona de Aragón',
					value: con.organizacion
				},
				{
					name: "movil",
					placeholder: "666666666",
					type: "Phone",
					value: con.movil
				},
				{
					name: "correo",
					placeholder: "pepe.pepe@españa.es",
					type: "email",
					value: con.correo

				}*/
			],
			buttons: [
				{
					text: 'Descartar',
					role: 'cancel',
					handler: data => {
						console.log('Text discarted');
					}
				},
				{
					text: 'Guardar',
					handler: data => {
						this.save();
					}
				}
			]
		});
		var coso;
		if(this.changed) //si ha cambiado
			alert.present(); //avisas al usuario de que guarde o descarte		

		for (var ii = 0; ii < this.psc.currentGroup.texts.length; ++ii){
			console.log("ii: " + JSON.stringify(this.psc.currentGroup.texts[ii]))
			console.log("empty: " + JSON.stringify(EditTextPage.emptyText))
			if(this.psc.currentGroup.texts[ii].equalsTo(EditTextPage.emptyText)){
				console.log("Hemos quitado un texto")
				this.psc.currentGroup.texts.splice(ii,1)
				--ii;
			}
		}
	}

}
