import { useQuery } from "react-query";

import { STALE_TIME } from "utils/constants";
import { getTransactionByOwner } from "services/transaction";

export const useGetTransactionByOwner = () =>
  useQuery(["get-transaction-by-owner"], () => getTransactionByOwner(), {
    staleTime: STALE_TIME.ONE_HOUR,
  });
