import { AxiosResponse } from "axios";
import { LoginFormModel, RegisterFormModel } from "types/Authentication";

import http from "utils/api/http";

export const login = async (payload: LoginFormModel) => {
  const response: AxiosResponse = await http.post("/auth/login", payload);

  return response?.data?.data;
};

export const register = async (payload: RegisterFormModel) => {
  const response: AxiosResponse = await http.post("/auth/register", payload);

  return response?.data?.data;
};
