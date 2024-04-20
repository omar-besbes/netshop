import { Test } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { describe, beforeEach, it, expect } from 'vitest';
import { ProductsService } from './products.service';
import { ProductServiceMock } from './mocks/product.service.mock';
import { Products } from './products';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, Products],
    })
      .overrideProvider(ProductsService)
      .useClass(ProductServiceMock)
      .compile();

    controller = module.get(ProductsController);
    service = module.get(ProductsService);
    controller.productsService = service;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  const yaought = {
    title: 'yaought',
    description: 'yaought delice',
    image: [],
    tags: ['consommation'],
    slug: 'y',
    quantity: 20,
    price: 1.3,
    categories: ['consommation'],
    added: 10,
    rating: 3,
    style: [],
  };

  it('should create a new product', async () => {
    const { id, ...result } = await controller.create(yaought);
    expect(result).toEqual(yaought);
  });

  it('should delete a previously created product', async () => {
    const { id, ...result } = await controller.create(yaought);
    await controller.delete(id);
    expect(result).toEqual(yaought);
  });

  it('should update a previously created product', async () => {
    const { id } = await controller.create(yaought);
    const updated = await controller.update(
      {
        description: 'this is a new description',
      },
      id.toString(),
    );
    // const updated = yaought;
    expect(updated).toEqual({
      ...yaought,
      description: 'this is a new description',
      id,
    });
  });
});
