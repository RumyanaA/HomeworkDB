import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from 'src/countries.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>,
  ) {}

  public async getCountryId(countryName: string): Promise<number> {
    const country = await this.countriesRepository.find({
      where: { countryName: countryName },
    });
    return country[0].id;
  }
}
