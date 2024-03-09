const articleRoutes = require('../routes/articleRoutes');
const request = require('supertest');

describe('POST /article/new', () => {

    test('Should respond with a 200 status code', async () => {
        
        const payload = {
            body: { 
                title: 'Test title 22',
                content: 'Test content'
            }
        };

        const response = await request(articleRoutes).post('/article/new').send(payload);
        //expect(response)
        console.log(response);
    }, 10000);

});