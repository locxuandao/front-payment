import { ConversationModel } from "./Conversation";
import { User } from "./User";

export interface Messeage {
  _id: string;
  conversationId: ConversationModel;
  sender: User;
  text: string;
}

export interface MesseagePayload {
  conversationId: any;
  sender: User;
  text: string;
}
