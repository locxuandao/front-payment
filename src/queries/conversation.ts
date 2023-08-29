import { useQuery } from "react-query";

import {
  getConversationByOwner,
  getConversationById,
} from "services/conversation";
import { STALE_TIME } from "utils/constants";

export const useGetConversationByOwner = () =>
  useQuery(["get-conversation-by-owner"], () => getConversationByOwner(), {
    staleTime: STALE_TIME.ONE_HOUR,
  });

export const useGetConversationById = (id: string) =>
  useQuery(["get-conversation-by-id", id], () => getConversationById(id), {
    staleTime: STALE_TIME.ONE_HOUR,
  });
