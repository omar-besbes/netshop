import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { describe, beforeEach, it, expect } from 'vitest';

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
