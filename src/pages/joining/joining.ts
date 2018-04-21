import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public groupName:string;
  public players = []/*Observable<>*/
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.groupName = this.navParams.get('groupName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoiningPage');
    console.log('El nombre del grupo va a ser: '+this.groupName);
  }

}
