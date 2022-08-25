import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to create a new Product', async () => {
  const createProduct = await request(App).post('/api/v1/product').send({
    name: faker.name.firstName(),
    category: faker.name.firstName(),
    currency: 'USD',
    price: 30.0
  });
  expect(createProduct.status).toBe(201);
});

it('should not be able to create a new Product with empty required fields', async () => {
  const createProduct = await request(App).post('/api/v1/product').send({
    name: '',
    category: '',
    currency: '',
    price: 30.0
  });
  expect(createProduct.status).toBe(400);
});
