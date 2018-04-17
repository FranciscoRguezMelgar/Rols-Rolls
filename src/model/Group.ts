import { Player } from "./Player";
export class Group{
	
	public members: Player[];
	public name:string;
	
	constructor(n:string, m:Array<Player>){
		this.members = m;
		this.name = n;
		
	}
	addMember(n: Player){
		this.members.push(n);
	}
	getMembers(){
		return this.members;
	}
	reset(){
		this.members = [];
	}
}