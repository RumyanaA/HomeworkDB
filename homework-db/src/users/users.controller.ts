import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { CountriesService } from 'src/countries/countriesService';
import { PasswordService } from 'src/passwordHash.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private countriesService: CountriesService,
    private passwordService: PasswordService,
  ) {}

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto) {
    const country = await this.countriesService.getCountryId(
      createUsersDto.country,
    );
    const countriesToVisit = await this.countriesService.getCountriesIds(
      createUsersDto.countriesToVisit,
    );
    const hashedPassword = await this.passwordService.hashPassword(
      createUsersDto.password,
    );
    const today = new Date();
    const inNintyDays = new Date();
    inNintyDays.setDate(today.getDate() + 90);
    const passwordExpiration = inNintyDays.toISOString().split('T')[0];
    const userData: User = {
      id: null,
      email: createUsersDto.email,
      password: hashedPassword,
      country: country.id,
      expiration_date: passwordExpiration,
      countriesToVisit: countriesToVisit,
    };
    this.usersService.create(userData);
  }
}
