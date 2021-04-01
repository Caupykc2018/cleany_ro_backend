import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BeforeInsert,
} from 'typeorm';
import RefreshToken from './RefreshToken';
import {compareHash, hash} from '@utils';

@Entity()
class User extends BaseEntity{
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;
  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;
  @Column({ type: 'varchar', nullable: false })
  password: string;
  @Column({ type: 'varchar', nullable: false })
  name: string;
  @Column({ type: 'varchar', nullable: false })
  role: string;
  @OneToOne(() => RefreshToken, (refreshToken) => refreshToken.user)
  @JoinColumn()
  refreshToken: RefreshToken;

  responseData() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      role: this.role,
      refreshToken: this.refreshToken?.token
    }
  }

  async comparePassword(password) {
    return await compareHash(password, this.password);
  }

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hash(this.password);
  }
}

export default User;
