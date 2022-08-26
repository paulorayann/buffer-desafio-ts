import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to delete a Product through the id', async () => {
  const createProduct = await request(App).post('/api/v1/product').send({
    name: faker.name.firstName(),
    category: faker.name.firstName(),
    currency: 'USD',
    price: 30.0
  });
  const updateProduct = await request(App).delete(`/api/v1/product/${createProduct.body._id}`).send();
  expect(updateProduct.status).toBe(204);
});

it('should not be able to delete a Product with an invalid ID', async () => {
  const updateProduct = await request(App).delete(`/api/v1/product/6307b066c61f8cff7790edf1`).send();
  expect(updateProduct.status).toBe(500);
});
