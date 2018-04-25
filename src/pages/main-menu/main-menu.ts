import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextsPage } from '../texts/texts'
import { RollsPage } from '../rolls/rolls'
/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-main-menu',
	templateUrl: 'main-menu.html',
})
export class MainMenuPage {
	public textsPage = TextsPage;
	public rollsPage = RollsPage;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MainMenuPage');
	}

}
