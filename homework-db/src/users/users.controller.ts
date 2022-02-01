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
    const countryId = await this.countriesService.getCountryId(
      createUsersDto.country,
    );
    debugger;
    const hashedPassword = await this.passwordService.hashPassword(
      createUsersDto.password,
    );
    const userData: User = {
      id: null,
      email: createUsersDto.email,
      password: hashedPassword,
      country: countryId,
      classes: [],
    };
    console.log(userData);
    this.usersService.create(userData);
  }
}
