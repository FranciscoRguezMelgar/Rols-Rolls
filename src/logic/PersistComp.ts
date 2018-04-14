import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';


@Injectable()
export class PersistComp{
	constructor(public ism:IonicStorageModule){
		ism.ready.then(
			(readyness) => {
				alert(JSON.stringify(readyness))
			}
		);
	}


}