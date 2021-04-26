import Controller from '@controllers/controller';
import { ExportController } from '@decorators';
import AuthController from './auth';
import StockController from './stock';
import UserController from './user';

@ExportController(AuthController)
@ExportController(StockController)
@ExportController(UserController)
class ApiController extends Controller {
  constructor() {
    super('/api');
  }
}

export default new ApiController().router;
