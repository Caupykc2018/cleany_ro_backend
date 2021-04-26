import { Stock, User } from '@models';
import { IAddStockData } from '@interfaces/http/services/stock';

class StockService {
  async getAll(user: User) {
    const stocks = await Stock.find({ where: { user } });

    return stocks.map((stock) => stock.info());
  }

  async add(data: IAddStockData, user: User) {
    const stock = Stock.create({ user, ...data });
    await stock.save();

    return stock.info();
  }
}

export default new StockService();
