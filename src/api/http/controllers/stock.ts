import StockService from '@services/stock';
import LogicService from '@services/logic';
import Controller from './controller';
import { endpoint, Middleware } from '@decorators';
import { decodeToken, parseUser } from '@middlewares';

class StockController extends Controller {
  constructor(path) {
    super(path);
    this.setEndpoints([this.add, this.getAll, this.recommend]);
  }

  @endpoint({
    statusCode: 201,
    method: 'post',
    path: '/',
    middlewares: [decodeToken(), parseUser],
  })
  async add(ctx) {
    return await StockService.add(ctx.request.body, ctx.state.user);
  }

  @endpoint({
    statusCode: 200,
    method: 'get',
    path: '/',
    middlewares: [decodeToken(), parseUser],
  })
  async getAll(ctx) {
    return await StockService.getAll(ctx.state.user);
  }

  @endpoint({
    statusCode: 200,
    method: 'get',
    path: '/recommend',
  })
  async recommend(ctx) {
    return LogicService.mockRecommend(ctx.request.body);
  }
}

export default new StockController('/stocks');
