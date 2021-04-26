import { User } from '@models';
import { Not } from 'typeorm';

class UserService {
  async getAll(user: User) {
    const users = await User.find({ where: { id: Not(user.id) } });

    return users.map((item) => item.responseData());
  }

  async delete(id: number) {
    const user = await User.findOne(id);

    await user.remove();

    return user.responseData();
  }
}

export default new UserService();
