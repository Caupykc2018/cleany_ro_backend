import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Place from '@models/Place';

@Entity()
class WorkPlace extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  area: number;
  @Column({ type: 'varchar' })
  type: string;
  @JoinColumn()
  @ManyToOne(() => Place, (place) => place.workPlaces)
  place: Place;
}

export default WorkPlace;
