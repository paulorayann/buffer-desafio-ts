import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should be able to create a new Client', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  expect(createClient.status).toBe(201);
});

it('should not be able to create a new Client with empty required fields', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: '',
    cpf: faker.br.cpf(),
    birthday: '09/09/1990',
    email: '',
    password: '',
    cep: '66640-677',
    number: 23
  });
  expect(createClient.status).toBe(400);
});

it('should not be able to create a new Client with invalid cpf', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: '111.222.345-67',
    birthday: '09/09/1990',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: 23
  });
  expect(createClient.status).toBe(400);
});

it('should not be able to create a new Client with invalid CEP', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '677',
    number: '23'
  });
  expect(createClient.status).toBe(400);
});

it('should not be able to create a new Client with invalid e-mail', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/09/1990',
    email: 'teste.mail',
    password: '12345678',
    cep: '66640-677',
    number: 23
  });
  expect(createClient.status).toBe(400);
});
