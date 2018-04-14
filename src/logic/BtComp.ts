import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';


@Injectable()
export class BtComp{
	constructor(public bts: BluetoothSerial){

	}

	setVisible(name:string){
		this.bts.setName(name)
		this.bts.setDiscoverable(30)
	}
	search(data: Array<Object>, t:Array<string>){		
		this.bts.discoverUnpaired().then(
			(unpairedDevices) => {
				data.length = 0;
				for(var ii = 0; ii < unpairedDevices.length; ii++){
					data.push(unpairedDevices[ii])
				}				
			},
			(err) => {
				data = [{name:"Fracaso"}];								
			}
		)		
	}
	send(){

	}	

	receive(){

	}


}