import { Test, TestingModule } from '@nestjs/testing';
import { Products } from './products';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Products', () => {
  let provider: Products;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Products],
    }).compile();

    provider = module.get<Products>(Products);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
