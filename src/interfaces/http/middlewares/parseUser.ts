import { Context } from 'koa';
import { User } from '@models';

interface IState {
  payload: {
    id: number;
  };
  user?: User;
  jwtOriginalError?: Error;
}

export interface IParseUserMiddlewareContext extends Context {
  state: IState;
}
