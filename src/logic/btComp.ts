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
	search(data: Array<Object>, t:Array<string>){		
		this.bts.discoverUnpaired().then(
			(unpairedDevices) =>{
				data = unpairedDevices;
				t = [JSON.stringify(data)];
			},
			(err)=>{
				data = [{name:"Fracaso"}];
				t = [JSON.stringify(data)];
				console.log(JSON.stringify(err))
			}
		)		
	}
	send(){

	}	

	receive(){

	}


}