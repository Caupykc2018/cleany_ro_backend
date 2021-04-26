import { Place } from '@models';
import { Between } from 'typeorm';

class LogicService {
  async recommendStockWithDevice({ latitude = 0, longitude = 0 }) {
    const places = await Place.find({
      where: {
        longitude: Between(latitude - 1, latitude + 1),
        latitude: Between(longitude - 1, longitude + 1),
      },
      relations: ['workPlaces'],
    });

    const { points, types } = places.reduce(
      (accum, { latitude, longitude, workPlaces }) => ({
        points: [...accum.points, { latitude, longitude }],
        types: [...accum.types, ...workPlaces.map(({ type }) => type)],
      }),
      { points: [], types: [] }
    );

    const sumPoint = points.reduce(
      (accum, { latitude, longitude }) => ({
        latitude: accum.latitude + latitude,
        longitude: accum.longitude + longitude,
      }),
      { latitude: 0, longitude: 0 }
    );

    const averagePoint = {
      latitude: sumPoint.latitude / points.length,
      longitude: sumPoint.longitude / points.length,
    };

    const mapTypes: { [p: string]: number } = types.reduce(
      (accum, type) => ({
        ...accum,
        [type]: accum[type] ? accum[type] + 1 : 1,
      }),
      {}
    );

    const perCentTypes = Object.entries(mapTypes).reduce(
      (accum, [key, value]) => ({ ...accum, [key]: value / types.length }),
      {}
    );

    return {
      point: averagePoint,
      types: perCentTypes,
    };
  }

  mockRecommend({ latitude = 0, longitude = 0 }) {
    const points = [
      { latitude: 0.3, longitude: 0.3 },
      { latitude: 0.3, longitude: 0.2 },
      { latitude: 0.4, longitude: 0.5 },
      { latitude: 0.2, longitude: 0.3 },
      { latitude: 0.5, longitude: 0.6 },
    ];
    const types = ['window', 'floor', 'floor', 'window', 'garth'];

    const sumPoint = points.reduce(
      (accum, { latitude, longitude }) => ({
        latitude: accum.latitude + latitude,
        longitude: accum.longitude + longitude,
      }),
      { latitude: 0, longitude: 0 }
    );

    const averagePoint = {
      latitude: sumPoint.latitude / points.length,
      longitude: sumPoint.longitude / points.length,
    };

    const mapTypes: { [p: string]: number } = types.reduce(
      (accum, type) => ({
        ...accum,
        [type]: accum[type] ? accum[type] + 1 : 1,
      }),
      {}
    );

    const perCentTypes = Object.entries(mapTypes).reduce(
      (accum, [key, value]) => ({ ...accum, [key]: value / types.length }),
      {}
    );

    return {
      point: averagePoint,
      types: perCentTypes,
    };
  }
}

export default new LogicService();
