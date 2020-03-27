//TESTE DE INTEGRAÇÃO, FAZENDO CHAMADA A API (GERAL)
const request = require('supertest');
const app = require('../../.src/app');
const connection = require('../../.src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback(); //ZERANDO O BANCO DE DADOS
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it("should be able to create a new ONG", async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "AACD",
                email: "email@email.com",
                whatsapp: "11123456789",
                city: "São Roque",
                uf: "SP"

            })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
});