import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

Entity();
class Device extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', nullable: false })
  name: string;
}

export default Device;
