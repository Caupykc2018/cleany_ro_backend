import { Context } from 'koa';
import { User } from '@models';

interface IState {
  user: User;
}

export interface IGuardRoleMiddlewareContext extends Context {
  state: IState;
}
