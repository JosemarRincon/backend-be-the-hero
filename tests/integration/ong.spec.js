const request = require('supertest');
const app = require('../../src/app');
const connection  = require('../../src/database/conections');
// usar a lib supertest para testas as requisicoes ao serviço REST
describe('ONG', () => {
  beforeEach(async ()=> {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
     await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
      const response = await request(app).post('/ongs').send({
        name:"APAD2",
	      email: "contato@apad.com.br",
	      whatsapp:"6299009900",
	      city: "Goiânia",
	      uf:"GO"
      });
      
      expect(response.body).toHaveProperty('id');
      expect (response.body.id).toHaveLength(8);
      

  });
})