import { IRouterContextWithData } from '@interfaces/commons/contexts';

export interface ILoginRouterContext extends IRouterContextWithData {
  body: {
    email: string;
    password: string;
  };
}

export interface IRegisterRouterContext extends IRouterContextWithData {
  body: {
    email: string;
    password: string;
    name: string;
    role: string;
  };
}

export interface IRefreshingTokenContext extends IRouterContextWithData {
  body: {
    refreshToken: string
  }
}
