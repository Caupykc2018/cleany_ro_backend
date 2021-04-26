import 'module-alias/register';
import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { createServer } from 'http';
import { port } from '@config';
import { initializeDatabase } from '@config/database';

import { cors } from '@middlewares';
import ApiRouter from '@controllers/api';

export const bootstrap = async () => {
  await initializeDatabase();
  const app = new Koa();

  app.use(cors);
  app.use(bodyParser());

  app.use(ApiRouter.routes());
  app.use(ApiRouter.allowedMethods());

  const server = createServer(app.callback());

  return server;
};

export const startup = async () => {
  const app = await bootstrap();

  app.listen(port, () => {
    console.log(`Listen on port ${port}`);
  });
};
