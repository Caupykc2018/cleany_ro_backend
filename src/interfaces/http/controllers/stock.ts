import { Context } from 'koa';
import { User } from '@models';

interface IStateWithUser {
  user: User;
}

interface IBodyStockData {
  location: string;
}

export interface IAddStockContext extends Context {
  state: IStateWithUser;
}
