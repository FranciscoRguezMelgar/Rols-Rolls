export class Player{
	public key?:string;
	public nick: string;
	public uid: string;
	constructor(n: string, u: string){
		this.nick = n;
		this.uid = u;
	}

}