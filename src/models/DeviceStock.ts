import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Stock from "@models/Stock";
import Device from "@models/Device";

@Entity()
class DeviceStock extends BaseEntity {
  @PrimaryGeneratedColumn({type: "int"})
  id: number;
  @JoinColumn()
  @ManyToOne(() => Stock, stock => stock.deviceStock)
  stock: Stock;
  @JoinColumn()
  @ManyToOne(() => Device, device => device.deviceStocks)
  device: Device;
  @Column({type: "int", default: 1})
  count: number;
}

export default DeviceStock;
