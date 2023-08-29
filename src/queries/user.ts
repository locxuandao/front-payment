import { useQuery } from "react-query";

import { STALE_TIME } from "utils/constants";
import { getUserById } from "services/user";

export const useGetUserById = (id: string) =>
  useQuery(["get-user-by-id", id], () => getUserById(id), {
    staleTime: STALE_TIME.ONE_HOUR,
  });
