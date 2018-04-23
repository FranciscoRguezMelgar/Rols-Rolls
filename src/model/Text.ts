export class Text{
	public content: string;
	public title: string;
	public visible: boolean;
	equalsTo(other:Text):boolean{
		var res: boolean;
		res = true;
		for (var ii in Text){
			res = res&& (this[ii] === other[ii])
		}
		return res;
	}
	constructor(c, t, v){
		this.content = c
		this.title = t;
		this.visible = v
	}
}