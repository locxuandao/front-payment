import { AxiosResponse } from "axios";

import http from "utils/api/http";
import { Messeage, MesseagePayload } from "types/Messeage";

export const getMesseageByConversationId = async (
  conversationId: string,
): Promise<Messeage[]> => {
  const response: AxiosResponse = await http.get(
    `messeages/conversations/${conversationId}`,
  );

  return response?.data?.data;
};

export const createMesseage = async (
  payload: MesseagePayload,
): Promise<Messeage> => {
  const response: AxiosResponse = await http.post(`/messeages`, payload);

  return response?.data?.data;
};
