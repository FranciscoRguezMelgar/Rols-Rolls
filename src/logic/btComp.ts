import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Injectable } from '@angular/core';


@Injectable()
export class BtComp{
	constructor(public bts: BluetoothSerial){

	}
	send(object){
		return JSON.stringify( this.bts.discoverUnpaired())
	}	
	receive(){

	}

}