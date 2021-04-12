import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import User from "@models/User";
import DeviceStock from "@models/DeviceStock";

@Entity()
class Stock extends BaseEntity {
  @PrimaryGeneratedColumn({type: "int"})
  id: number;
  @Column({type: "varchar"})
  name: string;
  @Column({type: "varchar"})
  location: string;
  @JoinColumn()
  @ManyToOne(() => User, user => user.stocks)
  user: User;
  @JoinColumn()
  @OneToMany(() => DeviceStock, deviceStock => deviceStock.stock)
  deviceStock: DeviceStock[];
}

export default Stock;
