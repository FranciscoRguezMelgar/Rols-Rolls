import {Dice} from './Dice';
export class Roll/*tirada*/{
	public dice:Dice[];
	public name:string;

	constructor(n:string, d: Array<Dice>){
		this.dice = [];
		console.log("Tirada construida con un array de numbers")
		if(d)
			this.dice = d.slice();			
		this.name = n;
	}



	public equals(other: Roll): boolean {
		var nameCond: boolean, arrayCond: boolean;
		nameCond = this.name.localeCompare(other.name)===0;
		if(this.dice.length != other.dice.length){
			return false;
		}
		arrayCond = true;
		for (var ii = 0; ii < this.dice.length; ++ii){
			arrayCond = arrayCond && (new Dice(this.dice[ii].faces).equals(other.dice[ii]))
		}
		console.log("nameCond: " + nameCond)
		console.log("arrayCond: " + arrayCond)
		return arrayCond && nameCond;
	}
	public roll(){
		var results = [];
		for (var ii = 0; ii < this.dice.length; ii++){
			results.push(this.dice[ii].roll())
		}
		return results;
	}
}