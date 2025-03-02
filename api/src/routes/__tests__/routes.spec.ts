import request from "supertest";


describe("Teste de rotas", () => {
    const URL = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

    it("Deve retornar 200 para a rota /", async () => {
        const response = await request(URL).get('/');
        expect(response.status).toBe(200);
    });

    it("Deve retornar 200 para a rota /user", async () => {
        const response = await request(URL).get('/user');
        expect(response.status).toBe(200);
    });
});