import User from "@models/User";
import Device from "@models/Device";
import RefreshToken from "@models/RefreshToken";
import DeviceStock from "@models/DeviceStock";
import Stock from "@models/Stock";
import Place from "@models/Place";
import WorkPlace from "@models/WorkPlace";

export {
  User,
  Device,
  RefreshToken,
  DeviceStock,
  Stock,
  Place,
  WorkPlace
};

export const models = [User, Device, RefreshToken, DeviceStock, Stock, Place, WorkPlace];
