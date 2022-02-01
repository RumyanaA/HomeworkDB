import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Countries } from '../countries.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  country: number;

  @Column()
  expiration_date: string;

  @ManyToMany((type) => Countries)
  @JoinTable()
  countriesToVisit: Countries[];
}
