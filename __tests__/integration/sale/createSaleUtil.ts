import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

function createClient() {
  return Promise.all([
    request(App).post('/api/v1/client').send({
      name: faker.name.firstName(),
      cpf: faker.br.cpf(),
      birthday: '09/05/2003',
      email: faker.internet.email(),
      password: '12345678',
      cep: '66640-677',
      number: '23'
    })
  ]);
}

function createProduct() {
  return Promise.all([
    request(App).post('/api/v1/product').send({
      name: faker.name.firstName(),
      category: faker.name.firstName(),
      currency: 'USD',
      price: 30.0
    })
  ]);
}

export default { createClient, createProduct };
