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

  public async getCountryId(countryName: string): Promise<Countries> {
    const country = await this.countriesRepository.find({
      where: { countryName: countryName },
    });
    return country[0];
  }
  public async getCountriesIds(countries: string[] = []) {
    const countriesToVisit: Countries[] = [];
    for (let i = 0; i < countries.length; i++) {
      const currentCountry = await this.countriesRepository.find({
        where: { countryName: countries[i] },
      });
      countriesToVisit.push(currentCountry[0]);
    }
    return countriesToVisit;
  }
}
