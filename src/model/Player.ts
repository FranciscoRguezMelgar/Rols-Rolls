export class Player{
	public nick: string;
	public address:string; //MAC address
	constructor(n: string, a: string){
		this.nick = n;
		this.address = a;
	}

}