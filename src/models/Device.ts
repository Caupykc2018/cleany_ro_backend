import {Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany} from 'typeorm';
import DeviceStock from "@models/DeviceStock";

@Entity()
class Device extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;
  @Column({ type: 'varchar', nullable: false })
  name: string;
  @Column({type: "varchar", nullable: false})
  type: string;
  @JoinColumn()
  @OneToMany(() => DeviceStock, deviceStock => deviceStock.device)
  deviceStocks: DeviceStock[];
}

export default Device;
