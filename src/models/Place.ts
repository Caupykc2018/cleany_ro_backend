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
import WorkPlace from '@models/WorkPlace';

@Entity()
class Place extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar' })
  address: string;
  @Column({ type: 'varchar' })
  type: string;
  @JoinColumn()
  @ManyToOne(() => User, (user) => user.places)
  user: User;
  @JoinColumn()
  @OneToMany(() => WorkPlace, (workPlace) => workPlace.place)
  workPlaces: WorkPlace[];
}

export default Place;
