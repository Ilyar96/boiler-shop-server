import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';
import {
  AddToCartResponse,
  GetAllResponse,
  UpdateCountRequest,
  UpdateCountResponse,
  UpdateTotalPriceRequest,
  UpdateTotalPriceResponse,
} from './types';

@ApiTags('Shopping cart')
@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiOkResponse({ type: [GetAllResponse] })
  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  getAll(@Param('id') userId: string) {
    return this.shoppingCartService.findAll(userId);
  }

  @ApiOkResponse({ type: AddToCartResponse })
  @UseGuards(AuthenticatedGuard)
  @Post('/add')
  addToCart(@Body() addToCartDto: AddToCartDto) {
    return this.shoppingCartService.add(addToCartDto);
  }

  @ApiOkResponse({ type: UpdateCountResponse })
  @ApiBody({ type: UpdateCountRequest })
  @UseGuards(AuthenticatedGuard)
  @Patch('/count/:id')
  updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateCount(count, partId);
  }

  @ApiOkResponse({ type: UpdateTotalPriceResponse })
  @ApiBody({ type: UpdateTotalPriceRequest })
  @UseGuards(AuthenticatedGuard)
  @Patch('/total-price/:id')
  updateTotalPrice(
    @Body() { total_price }: { total_price: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateTotalPrice(total_price, partId);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/one/:id')
  removeOne(@Param('id') partId: string) {
    return this.shoppingCartService.remove(partId);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/all/:id')
  removeAll(@Param('id') userId: string) {
    return this.shoppingCartService.removeAll(userId);
  }
}
