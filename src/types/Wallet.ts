import { User } from "./User";

export interface Wallet {
  user: User;
  deposit: number;
  debit: number;
}
