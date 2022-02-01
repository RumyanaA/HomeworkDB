import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Countries } from './countries.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CountriesService } from './countries/countriesService';
import { PasswordService } from './passwordHash.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3305,
      username: 'root',
      password: 'passw0rd',
      database: 'homework',
      entities: [User, Countries],
    }),
    TypeOrmModule.forFeature([Countries, User]),
  ],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService, CountriesService, PasswordService],
})
export class AppModule {}
