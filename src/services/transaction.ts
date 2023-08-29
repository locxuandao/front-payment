import { AxiosResponse } from "axios";

import http from "utils/api/http";
import { Transaction } from "types/Transaction";

export const getTransactionByOwner = async (): Promise<Transaction[]> => {
  const reponse: AxiosResponse = await http.get(`/transactions/owner`);

  return reponse?.data?.data;
};
