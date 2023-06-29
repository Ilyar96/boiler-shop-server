import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Op } from 'sequelize';

export interface IBoilerPartsQuery {
  limit?: string;
  offset?: string;
  first?: string;
  boiler?: string;
  parts?: string;
  priceFrom?: string;
  priceTo?: string;
}

export interface IBoilerPartsFilter {
  boiler_manufacturer?: string;
  parts_manufacturer?: string;
  price?: { [Op.between]: number[] };
}

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  boiler_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: `['${faker.image.city()}']` })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class BoilerPartsQuery {
  @ApiProperty({
    example: '20',
    required: false,
  })
  limit: string;

  @ApiProperty({
    example: '0',
    required: false,
  })
  offset: string;

  @ApiProperty({
    example: 'popularity',
    required: false,
  })
  first: 'popularity' | 'cheap' | 'expensive';

  @ApiProperty({
    example: 'Ariston',
    required: false,
  })
  boilers: string;

  @ApiProperty({
    example: 'Azure',
    required: false,
  })
  parts: string;

  @ApiProperty({
    example: 1000,
    required: false,
  })
  priceFrom: number;

  @ApiProperty({
    example: 9000,
    required: false,
  })
  priceTo: number;
}

export class PaginateAndFilterResponse {
  @ApiProperty({
    example: 100,
  })
  count: number;

  @ApiProperty({
    type: BoilerParts,
    isArray: true,
  })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse {
  @ApiProperty({
    example: 10,
  })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts;
}

export class FindOneResponse extends BoilerParts {}

export class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}
