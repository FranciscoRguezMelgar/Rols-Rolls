import { Player } from "./Player";
import { Map } from "./Map";
import { Text } from "./Text";
import { Image } from "./Image";
import { Roll } from "./Roll";
import { Turns } from "./Turns";
import { ChatRoom } from "./ChatRoom";
import { Conversation } from "./Conversation";

export class Group{
	public key:string;
	public maps: Array<Map>;
	public password: string;
	public title: string;
	public texts: Array<Text>;
	public images: Array<Image>;
	public rolls: Array<Roll>;
	public turns: Turns;
	public members: Array<Player>;
	public chatRoom: ChatRoom;
	public conversations: Array<Conversation>;
	constructor(
		maps: Array<Map>,
		password: string,
		title: string,
		texts: Array<Text>,
		images: Array<Image>,
		rolls: Array<Roll>,
		turns: Turns,
		members: Array<Player>,
		chatRoom: ChatRoom,
		conversations: Array<Conversation>
	){
		this.maps = maps;
		this.password = password;
		this.title = title;
		this.texts = texts;
		this.images = images;
		this.rolls = rolls;
		this.turns = turns;
		this.members = members;
		this.chatRoom = chatRoom;
		this.conversations = conversations;
	}
}
