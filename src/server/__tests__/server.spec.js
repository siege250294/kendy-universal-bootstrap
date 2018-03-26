const request = require('supertest');
const app = require('../server');

it('Should request a HTML string from production server', () => {
    return request(app)
        .get('/')
        .then((res) => {
            expect(
                res.text.indexOf(
                    '<div id="app"><div data-reactroot=""><ul><li><a href="/">Index</a></li><li><a href="/think-in-react">Thinking in React</a></li></ul><div>This is the index of this website.</div></div></div>'
                )
            ).not.toBe(-1);
        });
});
