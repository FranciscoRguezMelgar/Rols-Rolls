import { User } from "./User";
export class Group{
	public members: User[];
	public name:string;
	
	constructor(n:string, m:Array<User>){
		this.members = m;
		this.name = n;
		
	}
	addMember(n: User){
		this.members.push(n);
	}
	getMembers(){
		return this.members;
	}
	reset(){
		this.members = [];
	}
}