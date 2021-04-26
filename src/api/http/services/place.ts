import { User, Place } from '@models';

class PlaceService {
  async add(user: User) {}

  async getAll(user: User) {
    const places = await Place.find({ where: { user } });

    return places;
  }
}

export default new PlaceService();
