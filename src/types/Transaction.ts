import { User } from "./User";

export interface Transaction {
  _id: string;
  buyer: User;
  seller: User;
  goods: string;
  transaction_money: number;
  deposit: number;
  create_at: Date;
}
