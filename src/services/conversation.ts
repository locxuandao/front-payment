import { AxiosResponse } from "axios";

import http from "utils/api/http";
import { ConversationModel } from "types/Conversation";

export const getConversationByOwner = async (): Promise<
  ConversationModel[]
> => {
  const response: AxiosResponse = await http.get(`/conversations/owner`);

  return response?.data?.data;
};

export const getConversationById = async (
  id: string,
): Promise<ConversationModel> => {
  const response: AxiosResponse = await http.get(`/conversations/${id}`);

  return response?.data?.data;
};
