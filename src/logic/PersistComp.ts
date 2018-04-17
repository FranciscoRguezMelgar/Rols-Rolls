import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Group } from "../model/Group"
import { Player } from "../model/Player"

@Injectable()
export class PersistComp{	
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
					}
				);
			}
		);
	}
	getGroups(res: Array<Group>){		
		this.str.get("groups").then(
			(value) => {
				res.length = 0;
				for(var ii = 0; ii < value.length; ii++){
					res.push(value[ii]);
				}
			}
		)		
	}
	/*addGroup(){
		this.str.get("groups").then(
			(value) =>{
				value.push(new Group())
			}
		)
	}*/




}