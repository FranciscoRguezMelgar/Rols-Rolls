import { User } from "./user";
export class Group{
	private members: User[];	
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