import {Dice} from './Dice';
export class Roll/*tirada*/{
	public dice:Dice[];
	public name:string;
	public equals(other: Roll): boolean {
		var nameCond: boolean, arrayCond: boolean = true;
		nameCond = this.name === other.name;
		if(this.dice.length != other.dice.length){
			return false;
		}
	}
}