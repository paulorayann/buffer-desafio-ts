import request from 'supertest';
import App from '../../../src/app';
import saleUtil from './createSaleUtil';

it('should get all Sales', async () => {
  const getSales = await request(App).get('/api/v1/sale');
  expect(getSales.status).toBe(200);
});

it('should get Sale by id', async () => {
  const createSale = await request(App)
    .post('/api/v1/sale')
    .send({
      client: (await saleUtil.createClient()).shift().body._id,
      clientCurrency: 'BRL',
      date: '12/12/2021',
      items: [
        {
          product: (await saleUtil.createProduct()).shift().body._id,
          qtd: 1,
          unitValue: 45.0
        }
      ]
    });
  const listSales = await request(App).get(`/api/v1/sale/${createSale.body._id}`).send({});
  expect(listSales.status).toBe(200);
});

it('should not be able to get a Sale with invalid id format', async () => {
  const listSales = await request(App).get('/api/v1/sale/123546').send();
  expect(listSales.status).toBe(400);
});

it('should not be able to get a Sale with a formatted but nonexistent id', async () => {
  const listSales = await request(App).get('/api/v1/sale/6306c9cfbebbcae1495c2fc1').send();
  expect(listSales.status).toBe(500);
});
