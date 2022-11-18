import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    getProduct(@Query('name') productName: string) : ProductDTO[] {
        return this.productService.getProduct(productName);
    }

    @Get(':id')
    getProductById(@Param('id') id: string) : ProductDTO {
        return this.productService.getProductById(Number(id));
    }
}
