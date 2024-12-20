// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test('endpoint is returning desired info', async () => {
        const response = await request(app).get('/musicians');
        expect(response.statusCode).toBe(200);
    })  
    test('endpoint is returning desired info', async () => {
        const response = await request(app).get('/musicians/1');
        expect(response.body.name).toBe('Mick Jagger');
    })
    test('should return error array', async () => {
        const repsonse = await request(app)
        .post('/musicians')
        .send({name: "", instrument: ""});
        expect(response.body.errors.length).toBeGreaterThan(0);
    })
})
