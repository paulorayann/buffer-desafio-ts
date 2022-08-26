import request from 'supertest';
import App from '../../../src/app';
import saleUtil from './createSaleUtil';

it('should be able to create a new Sale', async () => {
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
          unitValue: 30.0
        }
      ]
    });
  expect(createSale.status).toBe(201);
});

it('should not be able to create a new Sale with invalid Client ID', async () => {
  const createSale = await request(App)
    .post('/api/v1/sale')
    .send({
      client: `6307bb6dc4e3e86713ae4170`,
      clientCurrency: 'BRL',
      date: '12/12/2021',
      items: [
        {
          product: (await saleUtil.createProduct()).shift().body._id,
          qtd: 1,
          unitValue: 30.0
        }
      ]
    });
  expect(createSale.status).toBe(500);
});

it('should not be able to create a new Sale with invalid Product ID', async () => {
  const createSale = await request(App)
    .post('/api/v1/sale')
    .send({
      client: (await saleUtil.createClient()).shift().body._id,
      clientCurrency: 'BRL',
      date: '12/12/2021',
      items: [
        {
          product: '6307bb6dc4e3e86713ae4170',
          qtd: 1,
          unitValue: 30.0
        }
      ]
    });
  expect(createSale.status).toBe(500);
});
