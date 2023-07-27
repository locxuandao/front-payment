import { useMutation } from "react-query";

import { login, register } from "services/auth";
import { LoginFormModel, RegisterFormModel } from "types/Authentication";

export const useLogin = () =>
  useMutation((payload: LoginFormModel) => login(payload));

export const useRegister = () =>
  useMutation((payload: RegisterFormModel) => register(payload));
