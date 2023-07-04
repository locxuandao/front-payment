import { useQuery } from "react-query";

import { getWalletByOwner } from "services/wallet";
import { STALE_TIME } from "utils/constants";

export const useGetWalletByOwner = () =>
  useQuery(["get-wallet-by-owner"], () => getWalletByOwner(), {
    staleTime: STALE_TIME.ONE_HOUR,
  });
