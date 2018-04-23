import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { Text } from '../../model/Text'
import { EditTextPage } from '../edit-text/edit-text'
import {Observable} from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
/**
 * Generated class for the TextsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-texts',
	templateUrl: 'texts.html',
})
export class TextsPage {
	public editTextPage= EditTextPage;
	public texts$;
	constructor(public navCtrl: NavController, public navParams: NavParams, public psc: PersistComp) {
	}
	edit(text: Text){
		this.navCtrl.push(this.editTextPage, {"text":text, "create":false});
	}
	create(){
		this.navCtrl.push(this.editTextPage, { "text": null, "create":true});	
	}
	makeVisible(text:Text){
		text.visible = true;
		console.log("Hemos difundido: " + text.title)
		this.psc.updateGroup();
	}
	delete(text:Text){
		var index = this.psc.currentGroup.texts.indexOf(text);
		this.psc.currentGroup.texts.splice(index, 1);
		this.psc.updateGroup()
	}
	ionViewDidLoad() {
		this.texts$ = this.psc.currentGroup.texts;
		console.log('ionViewDidLoad TextsPage');
	}

}
