import {
  ILoginRouterContext,
  IRefreshingTokenContext,
  IRegisterRouterContext,
} from '@interfaces/http/controllers/auth';
import AuthService from '@services/auth';
import handleError from '@errors/handle';
import { StatusCodes } from 'http-status-codes';

export const LogInController = async (ctx: ILoginRouterContext) => {
  try {
    ctx.response.body = await AuthService.logIn(ctx.request.body);
    ctx.response.status = StatusCodes.OK;
  } catch (e) {
    const { body, status } = handleError(e);
    ctx.response.body = body;
    ctx.response.status = status;
  }
};

export const RegisterController = async (ctx: IRegisterRouterContext) => {
  try {
    ctx.response.body = await AuthService.register(ctx.request.body);
    ctx.response.status = StatusCodes.CREATED;
  } catch (e) {
    const { body, status } = handleError(e);
    ctx.response.body = body;
    ctx.response.status = status;
  }
};

export const RefreshingTokenController = async (
  ctx: IRefreshingTokenContext
) => {
  try {
    ctx.response.body = await AuthService.refreshingToken(ctx.request.body);
    ctx.response.status = StatusCodes.OK;
  } catch (e) {
    const { body, status } = handleError(e);
    ctx.response.body = body;
    ctx.response.status = status;
  }
};
