import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account'
import {GroupsPage} from '../groups/groups'
import { PersistComp } from '../../logic/PersistComp'


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
  public CreateAccountPage = CreateAccountPage;
  public email:string;
  public password:string;
  public confirm:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ts:ToastController, public psc:PersistComp) {

  }


  login(){
    var user = this.psc.login(this.email, this.password)
    if ( user === null){
      let toast = this.ts.create({
      message: 'La contraseña o el usuario son incorrectos',
      duration: 3000,
      position: 'middle',
      });
      toast.present()
    }else{
      user.then(
        (value)=>{
          this.navCtrl.setRoot(GroupsPage)
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

}
