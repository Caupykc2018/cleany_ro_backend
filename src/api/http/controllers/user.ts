import Controller from '@controllers/controller';
import { endpoint } from '@decorators';
import UserService from '@services/user';
import { decodeToken, parseUser } from '@middlewares';

class UserController extends Controller {
  constructor(path) {
    super(path);
    this.setEndpoints([this.getAll, this.delete]);
  }

  @endpoint({
    statusCode: 200,
    path: '/',
    method: 'get',
    middlewares: [decodeToken(), parseUser],
  })
  async getAll(ctx) {
    return UserService.getAll(ctx.state.user);
  }

  @endpoint({
    statusCode: 200,
    path: '/:id',
    method: 'del',
    middlewares: [decodeToken(), parseUser],
  })
  async delete(ctx) {
    return UserService.delete(Number(ctx.params.id));
  }
}

export default new UserController('/users');
