export interface CredentialType {
  clientId: string;
  credential: string;
  select_by: string;
}

export interface LoginPayload {
  googleToken: string;
}

export interface LoginFormModel {
  username: string;
  password: string;
}

export interface RegisterFormModel {
  username: string;
  password: string;
  email: string;
  number_phone: string;
}
