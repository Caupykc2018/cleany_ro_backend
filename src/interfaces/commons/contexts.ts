import { IRouterContext } from 'koa-router';
import { User } from '@models';

export interface IRouterContextWithData extends IRouterContext {
  error?: Error;
  state: {
    user?: User;
  };
}
