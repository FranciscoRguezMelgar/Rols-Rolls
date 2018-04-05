import { User } from "user";
export class Group{
	private members: User[];
	
	addMember(n: User){
		members.push(n);
	}
	getMembers(){
		return this.members;
	}
	reset(){
		this.members = [];
	}
}