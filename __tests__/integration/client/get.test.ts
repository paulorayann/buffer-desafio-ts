import request from 'supertest';
import App from '../../../src/app';
import faker from 'faker-br';

it('should get all clients', async () => {
  const getClients = await request(App).get('/api/v1/client');
  expect(getClients.status).toBe(200);
});

it('should get client by id', async () => {
  const createClient = await request(App).post('/api/v1/client').send({
    name: faker.name.firstName(),
    cpf: faker.br.cpf(),
    birthday: '09/05/2003',
    email: faker.internet.email(),
    password: '12345678',
    cep: '66640-677',
    number: '23'
  });
  const listClients = await request(App).get(`/api/v1/client/${createClient.body._id}`).send();
  expect(listClients.status).toBe(200);
});

it('should not be able to get a Client with invalid id format', async () => {
  const listClients = await request(App).get('/api/v1/client/123546').send();
  expect(listClients.status).toBe(400);
});

it('should not be able to get a Client with formatted but nonexistent id', async () => {
  const listClients = await request(App).get('/api/v1/client/6306c9cfbebbcae1495c2fc1').send();
  expect(listClients.status).toBe(500);
});
