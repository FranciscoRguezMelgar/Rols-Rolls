import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BtComp{
	constructor(public ble:BLE){

	}
	esperarJugadores(res/*:Observable<>*/){
		res = this.ble.startScan([]);
		console.log(res)
	}	

}