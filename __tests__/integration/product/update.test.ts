import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to update a Product through the id', async () => {
  const createProduct = await request(App).post('/api/v1/product').send({
    name: faker.name.firstName(),
    category: faker.name.firstName(),
    currency: 'USD',
    price: 30.0
  });
  const updateProduct = await request(App).put(`/api/v1/product/${createProduct.body._id}`).send({
    currency: 'BRL'
  });

  expect(updateProduct.status).toBe(200);
});

it('should not be able to update a Product using an invalid ID', async () => {
  const updateProduct = await request(App).put(`/api/v1/product/6307b066c61f8cff7790edf1`).send({
    name: faker.name.firstName(),
    category: faker.name.firstName(),
    currency: 'USD',
    price: 30.0
  });
  expect(updateProduct.status).toBe(500);
});
