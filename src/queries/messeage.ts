import { useQuery } from "react-query";

import { STALE_TIME } from "utils/constants";
import { getMesseageByConversationId } from "services/messeage";

export const useGetMesseageByConversationById = (conversationID: string) =>
  useQuery(
    ["get-messeage-by-conversationId", conversationID],
    () => getMesseageByConversationId(conversationID),
    { staleTime: STALE_TIME.ONE_HOUR },
  );
