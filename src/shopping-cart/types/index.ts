import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 12 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 7815 })
  price: number;

  @ApiProperty({ example: 'Azure' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Cupiditate et.' })
  name: string;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=644335589478846342309060787025',
  })
  image: string;

  @ApiProperty({ example: 3 })
  in_stock: number;

  @ApiProperty({ example: 1 })
  count: number;

  @ApiProperty({ example: 7815 })
  total_price: number;

  @ApiProperty({ example: '2023-06-13T09:31:15.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-06-13T09:31:15.000Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCartResponse extends ShoppingCartItem {}

export class UpdateCountRequest {
  @ApiProperty({ example: 3 })
  count: number;
}
export class UpdateCountResponse extends UpdateCountRequest {}

export class UpdateTotalPriceRequest {
  @ApiProperty({ example: 5000 })
  total_price: number;
}

export class UpdateTotalPriceResponse extends UpdateTotalPriceRequest {}
