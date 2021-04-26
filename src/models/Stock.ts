import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '@models/User';
import DeviceStock from '@models/DeviceStock';
import { number } from 'yup';

@Entity()
class Stock extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  name: string;
  @Column({ type: 'decimal' })
  latitude: number;
  @Column({ type: 'decimal' })
  longitude: number;
  @JoinColumn()
  @ManyToOne(() => User, (user) => user.stocks)
  user: User;
  @JoinColumn()
  @OneToMany(() => DeviceStock, (deviceStock) => deviceStock.stock)
  deviceStock: DeviceStock[];

  info() {
    return {
      id: this.id,
      latitude: Number(this.latitude),
      longitude: Number(this.longitude),
      name: this.name,
    };
  }
}

export default Stock;
