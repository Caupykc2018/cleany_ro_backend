import * as Router from 'koa-router';
import authRouter from './auth';

const router = new Router({
  prefix: '/api',
});

router.use(authRouter.routes());

export default router;
