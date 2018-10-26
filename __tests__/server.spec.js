const request = require('supertest');
const app = require('../build/server');

it('Should request a HTML string from production server', () => {
    return request(app)
        .get('/')
        .then((res) => {
            expect(res.status === 200).toBeTruthy();
        });
});
