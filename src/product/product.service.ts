import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {

    private products : ProductDTO[] = [
        { id: 1, name: "apple", price: 50},
        { id: 2, name: "orange", price: 20},
        { id: 3, name: "bannana", price: 30},
    ]

    getProduct(name: string): ProductDTO[] {
        if(name){
            return [this.products.find((p) => p.name === name)];
        }
        return this.products;
    }

    getProductById(id: number): ProductDTO {
        return this.products.find((p) => p.id === id);
    }

}
