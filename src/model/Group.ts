import { Player } from "./Player";
import { Map } from "./Map";
import { Text } from "./Text";
import { Image } from "./Image";
import { Roll } from "./Roll";
import { Turns } from "./Turns";
import { ChatRoom } from "./ChatRoom";
import { Conversation } from "./Conversation";

export class Group{

	constructor(public maps: Array<Map>,
				public password: string,
				public title: string,
				public texts: Array<Text>,
				public images: Array<Image>,
				public rolls: Array<Roll>,
				public turns: Turns,
				public members: Array<Player>,
				public chatRoom: ChatRoom,
				public conversations: Array<Conversation>){}
}