export class Dice{
	public faces:number;
	public equals(other: Dice){
		return this.faces === other.faces;
	}
}