import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to update a Client through the id', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  const updateClient = await request(App).put(`/api/v1/client/${createClient.body._id}`).send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  expect(updateClient.status).toBe(200);
});

it('should not be able to update a Client sending an invalid CPF', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  const updateClient = await request(App).put(`/api/v1/client/${createClient.body._id}`).send({
    name: faker.name.firstName(),
    cpf: '12345678901',
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });

  expect(updateClient.status).toBe(400);
});

it('should not be able to update a Client using an invalid ID', async () => {
  const updateClient = await request(App).put(`/api/v1/client/6307b066c61f8cff7790edf1`).send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  expect(updateClient.status).toBe(500);
});
