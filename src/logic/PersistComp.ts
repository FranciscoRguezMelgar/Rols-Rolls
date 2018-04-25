import { Injectable } from '@angular/core';
import { Group } from "../model/Group"
import { Player } from '../model/Player'
import { AngularFireDatabase } from "angularfire2/database"
import { AngularFireList } from "angularfire2/database"
import { AngularFireAuth } from 'angularfire2/auth'
//import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'



@Injectable()
export class PersistComp{
	public groupsRef$: AngularFireList<Group>;
	public playersRef$: AngularFireList<Player>;
	public currentGroup: Group;
	public thisPlayer:Player;
	public currentGroupSus: Subscription;
	
	constructor(private myDb:AngularFireDatabase, public afa:AngularFireAuth){
		this.groupsRef$ = myDb.list<Group>('/groups');
		this.playersRef$ = myDb.list<Player>('/players');
		console.log(JSON.stringify(this.groupsRef$));
		//alert("Se ha iniciado el servicio de persistencia")
	}
	getDb(){
		return this.myDb;
	}

	createGroup(name:string){
		var bla = this.groupsRef$.push(
			new Group(
					[], //Maps
					Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6), //random password
					name, //name of the group
					[], //texts
					[], //images
					[], //rolls
					null, //turns
					[this.thisPlayer], //array with just the master
					null, //chatroom
					[], //conversations
					true
				)
		)
		return bla;
	}
	createAccount(email:string, password:string){
		console.log("HOLA")
		try{
			const result = this.afa.auth.createUserWithEmailAndPassword(email, password);
			return result;
		}catch(e){
			console.log("Error en el create, excepción.")
			console.log(e)
			return null;
		}
	}

	login(email:string, password:string){		
		try{
			const result = this.afa.auth.signInWithEmailAndPassword(email, password);
			return result;
			//this.navCtrl.setRoot(this.cap)
		}
		catch(e){
			/*let toast = this.ts.create({
			message: 'La contraseña o el usuario son incorrectos',
			duration: 3000,
			position: 'middle',

			});
			toast.present()*/
			console.log("Error en el login, excepción."+JSON.stringify(e))
			return null;
		}
	}

	getGroups(){
		return this.groupsRef$;
	}
	getUsers(){
		return this.playersRef$;
	}
	updateGroup(){
		console.log("Se ha hecho updateGroup() sobre: " + JSON.stringify(this.currentGroup))
		return this.getGroups().update(this.currentGroup.key, this.currentGroup);
	}



}