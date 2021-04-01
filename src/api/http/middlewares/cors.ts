import { IRouterContext, IMiddleware } from 'koa-router';
import { Next } from 'koa';

const CorsMiddleware: IMiddleware = async (ctx: IRouterContext, next: Next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');

  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 204;
  } else {
    await next();
  }
};

export default CorsMiddleware;
