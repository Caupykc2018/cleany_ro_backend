import { IParseUserMiddlewareContext } from '@interfaces/http/middlewares/parseUser';
import { Next } from 'koa';
import { User } from '@models';
import { StatusCodes } from 'http-status-codes';

const ParseUserMiddleware = async (
  ctx: IParseUserMiddlewareContext,
  next: Next
) => {
  const { jwtOriginalError, payload } = ctx.state;

  if (jwtOriginalError) {
    ctx.response.status = StatusCodes.UNAUTHORIZED;
    ctx.response.body = {
      error: 'No authorized',
    };
    return;
  }

  const user = await User.findOne(payload.id);

  if (!user) {
    ctx.response.status = StatusCodes.NOT_FOUND;
    ctx.response.body = {
      error: 'No user',
    };
    return;
  }

  ctx.state.user = user;

  await next();
};

export default ParseUserMiddleware;
