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
	search(data){		
		this.bts.discoverUnpaired().then(
			(success) =>{
				data.texto = success;
			},
			(err)=>{
				data.texto = "Fracaso";
				console.log(JSON.stringify(err))
			}
		)		
	}
	send(){

	}	

	receive(){

	}


}