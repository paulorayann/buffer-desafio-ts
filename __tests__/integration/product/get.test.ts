import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should get all Products', async () => {
  const listProducts = await request(App).get('/api/v1/product').send();
  expect(listProducts.status).toBe(200);
});

it('should get product by id', async () => {
  const createProduct = await request(App).post('/api/v1/product').send({
    name: faker.name.firstName(),
    category: faker.name.firstName(),
    currency: 'USD',
    price: 30.0
  });
  const listProducts = await request(App).get(`/api/v1/product/${createProduct.body._id}`).send();
  expect(listProducts.status).toBe(200);
});

it('should not be able to get a Product with invalid id format', async () => {
  const listProducts = await request(App).get('/api/v1/product/123546').send();
  expect(listProducts.status).toBe(400);
});

it('should not be able to get a Product with formatted but nonexistent id', async () => {
  const listProducts = await request(App).get('/api/v1/product/6306c9cfbebbcae1495c2fc1').send();
  expect(listProducts.status).toBe(500);
});
