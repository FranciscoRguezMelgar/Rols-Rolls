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
	search(data: Array<Object>){		
		this.bts.discoverUnpaired().then(
			(unpairedDevices) =>{
				data = unpairedDevices;
			},
			(err)=>{
				data = [{name:"Fracaso"}];
				console.log(JSON.stringify(err))
			}
		)		
	}
	send(){

	}	

	receive(){

	}


}