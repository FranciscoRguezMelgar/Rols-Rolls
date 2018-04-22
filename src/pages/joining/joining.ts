import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersistComp } from '../../logic/PersistComp'
import { ThenableReference } from '@firebase/database-types'
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
    var ref:ThenableReference = this.navParams.get('group');
    var key: string = ref.key;
    this.sus = this.psc.getGroups().snapshotChanges().map(
      data => {
        data.map(
          element => {
            this.group = { key: element.key, ...element.payload.val() } as Group;
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
    if (this.sus)
      this.sus.unsubscribe();
  }
  printGroup(){
    console.log(this.group)
  }

}