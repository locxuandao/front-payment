import { AxiosResponse } from "axios";

import http from "utils/api/http";
import { User } from "types/User";

export const getUserById = async (id: string): Promise<User> => {
  const response: AxiosResponse = await http.get(`/users/${id}`);

  return response?.data?.data;
};
