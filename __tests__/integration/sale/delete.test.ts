import request from 'supertest';
import App from '../../../src/app';
import saleUtil from './createSaleUtil';

it('should be able to delete a sale through the id', async () => {
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
  const deleteSale = await request(App).delete(`/api/v1/sale/${createSale.body._id}`);
  expect(deleteSale.status).toBe(204);
});

it('should not be able to delete a sale with an invalid ID', async () => {
  const deleteSale = await request(App).delete(`/api/v1/sale/6307b066c61f8cff7790edf1`).send();
  expect(deleteSale.status).toBe(500);
});
