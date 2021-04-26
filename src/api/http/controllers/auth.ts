import {
  ILoginRouterContext,
  IRefreshingTokenContext,
  IRegisterRouterContext,
} from '@interfaces/http/controllers/auth';
import AuthService from '@services/auth';
import Controller from '@controllers/controller';
import { endpoint } from '@decorators';
import { StatusCodes } from 'http-status-codes';

class AuthController extends Controller {
  constructor() {
    super();
    this.setEndpoints([this.logIn, this.register, this.refreshingToken]);
  }

  @endpoint({ statusCode: StatusCodes.OK, method: 'post', path: '/login' })
  async logIn(ctx: ILoginRouterContext) {
    return await AuthService.logIn(ctx.request.body);
  }

  @endpoint({
    statusCode: StatusCodes.CREATED,
    method: 'post',
    path: '/register',
  })
  async register(ctx: IRegisterRouterContext) {
    return await AuthService.register(ctx.request.body);
  }

  @endpoint({
    statusCode: StatusCodes.OK,
    method: 'post',
    path: '/refresh-token',
  })
  async refreshingToken(ctx: IRefreshingTokenContext) {
    console.log('login');
    return await AuthService.refreshingToken(ctx.request.body);
  }
}

export default new AuthController();
