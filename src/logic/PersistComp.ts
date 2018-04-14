import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Group } from "../model/Group"
import { User } from "../model/User"

@Injectable()
export class PersistComp{
	ready = false;
	constructor(public str:Storage){
		//Indicamos que el módulo de almacenamiento ya está encendido
		this.str.ready().then(
			(readyness) => {
				//Vemos cuántas claves hay
				this.str.keys().then(
					(keys) => {
						if(keys.length == 0){
							this.str.set("groups", undefined);
						}						
						this.str.clear().then(
							(arg) => {
								var usuariosPrueba = [new User("Paco"), new User("Pepe"), new User("Federica")];
								this.str.set("groups", [new Group("Partida de dragones", usuariosPrueba)])
								this.ready = true;
							}
						)
					}
				);
			}
		);
	}
	getGroups(res: Array<Group>){
		//while(!this.ready);
		this.str.get("groups").then(
			(value) => {
				res.length = 0;
				for(var ii = 0; ii < value.length; ii++){
					res.push(value[ii]);
				}
			}
		)
	}




}