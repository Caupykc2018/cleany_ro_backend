import { IRouterContext, IMiddleware } from 'koa-router';
import { Next } from 'koa';
import { StatusCodes } from "http-status-codes";

const CorsMiddleware: IMiddleware = async (ctx: IRouterContext, next: Next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');

  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = StatusCodes.NO_CONTENT;
  } else {
    await next();
  }
};

export default CorsMiddleware;
