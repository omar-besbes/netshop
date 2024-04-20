import { UpdateProductDto } from '../dto/update-product.dto';
import { Product } from '../interfaces/product.interface';
import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products.service';

@Injectable()
// @ts-expect-errors fine
export class ProductServiceMock implements ProductsService {
  private products: Product[] = [];

  findAll(): Promise<Product[]> {
    return new Promise((res) => res(this.products));
  }
  findOne(id: string): Promise<Product> {
    return new Promise((res) => res(this.products.find((p) => p.id === id)));
  }
  create(product: Product): Promise<Product> {
    return new Promise((res) => {
      const id = Types.ObjectId.createFromTime(Date.now() / 1000).toString();
      this.products.push({ id, ...product });
      res({ id, ...product });
    });
  }
  delete(id: string): Promise<Product> {
    return new Promise((res) => {
      const index = this.products.findIndex((p) => p.id === id);
      if (index >= 0) this.products.splice(index, 1);
      return res(index >= 0 ? this.products[index] : null);
    });
  }
  deleteAll(): Promise<void> {
    return new Promise((res) => {
      this.products = [];
      res();
    });
  }
  update(id: string, product: UpdateProductDto): Promise<Product> {
    return new Promise((res) => {
      const index = this.products.findIndex((p) => p.id === id);
      if (index >= 0) {
        Object.assign(this.products[index], product);
        res(this.products[index]);
      } else {
        res(null);
      }
    });
  }
}
