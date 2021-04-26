import { Next } from 'koa';
import { IGuardRoleMiddlewareContext } from '@interfaces/http/middlewares/guardRole';
import { StatusCodes } from 'http-status-codes';

const GuardRoleMiddleware = (roles: string[]) => async (
  ctx: IGuardRoleMiddlewareContext,
  next: Next
) => {
  const { user } = ctx.state;

  if (!roles.includes(user.role)) {
    ctx.response.status = StatusCodes.INTERNAL_SERVER_ERROR;
    return;
  }

  await next();
};

export default GuardRoleMiddleware;
