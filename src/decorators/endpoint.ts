import { Context, Next } from 'koa';
import handleError from '@errors/handle';

interface IArguments {
  path?: string;
  method?: string;
  statusCode?: number;
  middlewares?: Array<any>;
  postMiddleware?: Array<any>;
}

const EndpointDecorator = ({
  statusCode = 200,
  method = 'get',
  path = '/',
  middlewares = [],
  postMiddleware = [],
}: IArguments) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const func = descriptor.value;

    const controller = async function (ctx: Context, next: Next) {
      try {
        const response = await func.apply(this, [ctx, next]);

        if (response) {
          ctx.response.body = response;
          ctx.response.status = statusCode;
        }
      } catch (e) {
        const { body, status } = handleError(e);
        ctx.response.body = body;
        ctx.response.status = status;
      }
    };

    descriptor.value = function () {
      return [method, path, ...middlewares, controller, ...postMiddleware];
    };
  };
};

export default EndpointDecorator;
