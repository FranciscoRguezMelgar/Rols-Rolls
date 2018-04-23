export class Text{
	public content: string;
	public title: string;
	public visible: boolean;
	equalsTo(other:Text):boolean{
		var res: boolean;
		res =
			this.content === other.content &&
			this.title === other.title &&
			this.visible === other.visible;
		return res;
	}
	constructor(c, t, v){
		this.content = c
		this.title = t;
		this.visible = v
	}
}