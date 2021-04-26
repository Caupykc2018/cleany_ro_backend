import { Context } from 'koa';

export interface ILoginRouterContext extends Context {
  body: {
    email: string;
    password: string;
  };
}

export interface IRegisterRouterContext extends Context {
  body: {
    email: string;
    password: string;
    name: string;
    role: string;
  };
}

export interface IRefreshingTokenContext extends Context {
  body: {
    refreshToken: string;
  };
}
