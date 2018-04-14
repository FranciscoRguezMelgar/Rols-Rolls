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
				data.length = 0;
				for(var ii = 0; ii < unpairedDevices.length; ii++){
					data.push(unpairedDevices[ii])
				}
				t = [JSON.stringify(data)];
				alert(t[0])
			},
			(err)=>{
				data = [{name:"Fracaso"}];
				alert("Fracaso")
				t = [JSON.stringify(data)];
				console.log(t[0])
			}
		)		
	}
	send(){

	}	

	receive(){

	}


}