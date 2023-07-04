import { AxiosResponse } from "axios";

import http from "utils/api/http";
import { Wallet } from "types/Wallet";

export const getWalletByOwner = async (): Promise<Wallet> => {
  const response: AxiosResponse = await http.get(`/wallets/owner`);

  return response?.data?.data;
};
