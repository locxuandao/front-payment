import { User } from "./User";

export interface ConversationModel {
  _id: string;
  members: User[];
  lease: string;
}
