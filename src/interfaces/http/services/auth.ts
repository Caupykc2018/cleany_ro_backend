export interface ILogInData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface IRefreshingTokenData {
  refreshToken: string;
}
