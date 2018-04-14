import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';


@Injectable()
export class BtComp{
	constructor(public bts: BluetoothSerial){

	}
	setVisible(){
		this.bts.setName("Adrián")
		this.bts.setDiscoverable(30)
	}
	search(){
		var res;
		this.bts.discoverUnpaired().then(
			(success) =>{
				res = success;				
			},
			(err)=>{
				console.log(JSON.stringify(err))
			}
		)
		return res;
	}
	send(){

	}	

	receive(){

	}


}