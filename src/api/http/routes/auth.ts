import * as Router from 'koa-router';
import {
  LogInController,
  RegisterController,
  RefreshingTokenController,
} from '@controllers/auth';

const router = new Router({
  prefix: '',
});

router.post('/login', LogInController);
router.post('/register', RegisterController);
router.post('/refresh-token', RefreshingTokenController);

export default router;
