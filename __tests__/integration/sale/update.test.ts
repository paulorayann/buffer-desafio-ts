import request from 'supertest';
import App from '../../../src/app';
import saleUtil from './createSaleUtil';

it('should be able to update a Sale through the id', async () => {
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
  const updateSale = await request(App)
    .put(`/api/v1/sale/${createSale.body._id}`)
    .send({
      client: (await saleUtil.createClient()).shift().body._id,
      clientCurrency: 'BRL',
      date: '12/12/2022',
      items: [
        {
          product: (await saleUtil.createProduct()).shift().body._id,
          qtd: 3,
          unitValue: 45.0
        }
      ]
    });

  expect(updateSale.status).toBe(200);
});

it('should not be able to update a Sale through invalid id', async () => {
  const update = await request(App)
    .put(`/api/v1/sale/6307b066c61f8cff7790edf1`)
    .send({
      client: (await saleUtil.createClient()).shift().body._id,
      clientCurrency: 'BRL',
      date: '15/12/2021',
      items: [
        {
          product: (await saleUtil.createProduct()).shift().body._id,
          qtd: 3,
          unitValue: 45.0
        }
      ]
    });
  expect(update.status).toBe(500);
});
