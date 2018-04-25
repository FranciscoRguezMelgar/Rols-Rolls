export class Dice{
	public faces:number;
	constructor(f:number){
		this.faces = f;
	}
	public equals(other: Dice){
		console.log("this.faces:  " + JSON.stringify(this.faces))
		console.log("other.faces: " + other.faces)
		return this.faces == other.faces;
	}
	public roll():number{
		return Math.floor((Math.random() * this.faces)+1);
	}
}