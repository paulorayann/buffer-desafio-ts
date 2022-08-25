import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to delete a Client through the id', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  const updateClient = await request(App).delete(`/api/v1/client/${createClient.body._id}`).send();
  expect(updateClient.status).toBe(204);
});

it('should not be able to delete a Client with an invalid ID', async () => {
  const updateClient = await request(App).delete(`/api/v1/client/6307b066c61f8cff7790edf1`).send();
  expect(updateClient.status).toBe(500);
});
