export class User{
	private nick: string;
	constructor(n: string){
		this.nick = n;
	}
	setNick(n: string){
		this.nick = n;
	}
	getNick(){
		return this.nick;
	}
}