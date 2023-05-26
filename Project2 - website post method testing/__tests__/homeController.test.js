
// homecController
const router = require('../controllers/homeController');
const request = require('supertest')
const app = require('../app')

describe('should fetch users (post method) (Given 1)', () => {
    
    test('should fetch users (post method)', () => {
        // promise style with a 'return'
        return request(app)
            .post('/users/submit')
            .type('form')
            .send({name:"Steve", gender:"male"})
            .expect(200)
            .then(() => {
                return request(app) 
                .get("/users", () => {
                    response => {
                     expect(response.body).toBeDefined()
                    }
                }) 
            })
           
    })
    
})


describe('Test Users Functions: showUsers, addUsers using Jest Mock functions (Test Feature 2 - Skip This)', () => { // From Dr. Cheer-Sun Yang's project2-student-copy -> __tests__ -> homeController.test.js

    //These tests do not use supertest to generate a basic request.
    // Instead, the request body is defined before calling the homeController functions.
    // Here we use a Jest mock function to mock the response prior to calling the
    // homeController functions. Then, we simply check the response received from the 
    // homeController functions.

    test('Test showHome', function (done) {
        const req = {};
        const res = { render: jest.fn() };
        router.showHome(req, res);
        expect(res.render.mock.calls[0][0]).toBe('index')
        done();
    });
    test('Test showUsers', function (done) {
        const req = {};
        const res = { render: jest.fn() };
        router.showUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')
        done();
    });
    test('Test addUsers', function (done) {
        const req = { body: { name: "Ava", gender: "female" } };
        const res = { render: jest.fn() };
        router.addUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')

        done();
    });

    test('Test showUsers (Test Feature 2 - Skip This)', function (done) {
        const req = {};
        const res = { render: jest.fn() };
        router.showUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')
        expect(res.render.mock.calls).toHaveLength(1);
        expect(res.render.mock.calls[0][1])
            .toStrictEqual(
                {   // Notice that the sequence of the elements inside the array is critical.
                    // Try to change the seequence of elements and run the test.
                    "allUsers": [
                        { "name": "John", "gender": "male" },
                        { "name": "Steve", "gender": "male" },
                        { "name": "Ava", "gender": "female" }
                    ], "title": "Users List"
                });

        done();
    });
})

describe('should fetch users (Given 3)', () => {
    
    test('should fetch users',  () => {
        // promise style
        return request(app)
            .get('/users')
            .set('Accept', 'text/html')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
            .then(response => {
                expect(response.body).toBeDefined()
            })
    });
    
})

describe('checking /delete (Test Feature 4)', () => { 

    it('checking /delete', async () => {
        const res = await request(app).get('/delete');
        expect(res.statusCode).toBe(200)
    })
})

describe('checking /no-such-route (404) (Test Feature 5)', () => { 

    it('checking /no-such-route', async () => {
        const res = await request(app).get('/no-such-route');
        expect(res.statusCode).toBe(404)
    })
})

describe('response to get / (Given 6)', () => { 

    it('response to get /', async () => {
        // async/await style
        const res = await request(app).get('/');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
        expect(res.statusCode).toBe(200)
    })
})

describe('checking /users (Test Feature 7)', () => { 

    it('checking /users', async () => {
        const res = await request(app).get('/users');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    })
})

describe('response to post /users (Given 8)', () => { 

    it('response to post /users', async () => {
        const res = await request(app).post('/users/submit');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    })
})

describe('checking /delete (Test Feature 9)', () => { 

    it('checking /delete', async () => {
        const res = await request(app).get('/delete');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    })
})

describe('checking post /users/delete (Test Feature 10)', () => {

    it('checking post /users/delete', async () => {
        const res = await request(app).post('/users/delete');
        expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    })
})

describe('checking post /users/delete works (Test Feature 11 - Skip This)', () => {
    test('checking delete works', () => {
        return request(app)
            .post('/users/delete')
            .type('form')
            .send({name:"Ava"})
            .expect(200) // status code
     })
     test('Test showUsers (Post delete)', function (done) {
        const req = {};
        const res = { render: jest.fn() };
        router.showUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')
        expect(res.render.mock.calls).toHaveLength(1);
        expect(res.render.mock.calls[0][1])
            .toStrictEqual(
                {   // Notice that the sequence of the elements inside the array is critical.
                    // Try to change the seequence of elements and run the test.
                    "allUsers": [
                        { "name": "John", "gender": "male" },
                        { "name": "Steve", "gender": "male" },
                    ], "title": "Users List"
                });

        done();
    });
    test('Test addUsers', function (done) {
        const req = { body: { name: "Ava", gender: "female" } };
        const res = { render: jest.fn() };
        router.addUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')

        done();
    });
    test('Test showUsers (Post add)', function (done) {
        const req = {};
        const res = { render: jest.fn() };
        router.showUsers(req, res);
        expect(res.render.mock.calls[0][0]).toBe('users')
        expect(res.render.mock.calls).toHaveLength(1);
        expect(res.render.mock.calls[0][1])
            .toStrictEqual(
                {   // Notice that the sequence of the elements inside the array is critical.
                    // Try to change the seequence of elements and run the test.
                    "allUsers": [
                        { "name": "John", "gender": "male" },
                        { "name": "Steve", "gender": "male" },
                        { "name": "Ava", "gender": "female" }
                    ], "title": "Users List"
                });
                
        done();
    });
})
